document.addEventListener('DOMContentLoaded', () => {
    // State
    let currentLessonId = null;
    let completedLessons = JSON.parse(localStorage.getItem('csharp_completed_lessons')) || [];
    let allLessons = window.lessonsData || [];

    // DOM Elements
    const elements = {
        sidebar: document.getElementById('sidebar'),
        sidebarToggle: document.getElementById('sidebar-toggle'),
        mobileToggle: document.getElementById('mobile-toggle'),
        curriculumNav: document.getElementById('curriculum-nav'),
        searchInput: document.getElementById('lesson-search'),
        libraryHubBtn: document.getElementById('library-hub-btn'),
        
        progressText: document.getElementById('overall-progress-text'),
        progressFill: document.getElementById('overall-progress-fill'),
        
        welcomeScreen: document.getElementById('welcome-screen'),
        lessonView: document.getElementById('lesson-view'),
        startBtn: document.getElementById('start-learning-btn'),
        
        lessonModuleBadge: document.getElementById('lesson-module-badge'),
        lessonLibraryBadge: document.getElementById('lesson-library-badge'),
        lessonTitle: document.getElementById('lesson-title'),
        objectivesList: document.getElementById('objectives-list'),
        lessonBody: document.getElementById('lesson-body'),
        
        conceptNote: document.getElementById('concept-note'),
        conceptNoteContent: document.getElementById('concept-note-content'),
        
        realUseCase: document.getElementById('real-use-case'),
        realUseCaseContent: document.getElementById('real-use-case-content'),
        
        exercisesSection: document.getElementById('exercises-section'),
        exercisesContainer: document.getElementById('exercises-container'),
        
        quizSection: document.getElementById('quiz-section'),
        quizContainer: document.getElementById('quiz-container'),
        
        prevBtn: document.getElementById('prev-lesson-btn'),
        nextBtn: document.getElementById('next-lesson-btn'),
        markCompleteBtn: document.getElementById('mark-complete-btn'),
    };

    // Initialize App
    function init() {
        if (!allLessons || allLessons.length === 0) {
            elements.curriculumNav.innerHTML = '<p style="padding: 1rem; color: #94a3b8;">Loading curriculum data...</p>';
            return;
        }
        
        renderSidebar();
        updateProgress();
        setupEventListeners();

        // Check if there's a last viewed lesson
        const lastLesson = localStorage.getItem('csharp_last_lesson');
        if (lastLesson) {
            loadLesson(parseInt(lastLesson));
        }
    }

    // Render Sidebar
    function renderSidebar(searchQuery = '') {
        elements.curriculumNav.innerHTML = '';
        
        // Group lessons by module
        const modules = {};
        allLessons.forEach(lesson => {
            if (!modules[lesson.moduleId]) {
                modules[lesson.moduleId] = {
                    name: lesson.moduleName,
                    lessons: []
                };
            }
            if (lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                lesson.moduleName.toLowerCase().includes(searchQuery.toLowerCase())) {
                modules[lesson.moduleId].lessons.push(lesson);
            }
        });

        // Render HTML
        for (const [moduleId, module] of Object.entries(modules)) {
            if (module.lessons.length === 0) continue;

            const moduleDiv = document.createElement('div');
            moduleDiv.className = 'module-group';
            
            const moduleHeader = document.createElement('div');
            moduleHeader.className = 'module-header';
            moduleHeader.textContent = module.name;
            moduleDiv.appendChild(moduleHeader);

            module.lessons.forEach(lesson => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isActive = currentLessonId === lesson.id;
                
                const lessonDiv = document.createElement('div');
                lessonDiv.className = `lesson-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`;
                lessonDiv.dataset.id = lesson.id;
                
                const iconClass = isCompleted ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle';
                
                lessonDiv.innerHTML = `
                    <div class="lesson-icon"><i class="${iconClass}"></i></div>
                    <div class="lesson-title">${lesson.title}</div>
                `;
                
                lessonDiv.addEventListener('click', () => loadLesson(lesson.id));
                moduleDiv.appendChild(lessonDiv);
            });

            elements.curriculumNav.appendChild(moduleDiv);
        }
    }

    // Syntax Highlighting simple regex logic
    function highlightCode(code) {
        // Escape HTML
        let highlighted = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        // Strings
        highlighted = highlighted.replace(/("[^"]*")/g, '<span class="str">$1</span>');
        
        // Comments
        highlighted = highlighted.replace(/(\/\/.*)/g, '<span class="com">$1</span>');
        
        // Keywords
        const keywords = ['public', 'private', 'protected', 'class', 'static', 'void', 'string', 'int', 'bool', 'var', 'new', 'if', 'else', 'for', 'while', 'foreach', 'in', 'return', 'using', 'namespace', 'true', 'false', 'null'];
        const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
        
        // Avoid highlighting keywords inside tags
        highlighted = highlighted.replace(/(<[^>]+>)|(\b\w+\b)/g, (match, p1, p2) => {
            if (p1) return p1;
            if (keywords.includes(p2)) return `<span class="kw">${p2}</span>`;
            return p2;
        });

        // Types (capitalized words after new, or typical types)
        highlighted = highlighted.replace(/\b(Console|List|Array|String|Int32|Boolean|Exception|Task|Thread)\b/g, '<span class="type">$1</span>');

        return highlighted;
    }

    // Load Lesson
    function loadLesson(id) {
        const lesson = allLessons.find(l => l.id === id);
        if (!lesson) return;

        currentLessonId = id;
        localStorage.setItem('csharp_last_lesson', id);
        
        // UI updates
        elements.welcomeScreen.classList.add('hidden');
        elements.lessonView.classList.remove('hidden');
        
        // Header
        elements.lessonModuleBadge.textContent = lesson.moduleName;
        elements.lessonTitle.textContent = lesson.title;
        
        if (lesson.library) {
            elements.lessonLibraryBadge.innerHTML = `<i class="fa-solid fa-box"></i> ${lesson.library}`;
            elements.lessonLibraryBadge.classList.remove('hidden');
        } else {
            elements.lessonLibraryBadge.classList.add('hidden');
        }
        
        // Objectives
        elements.objectivesList.innerHTML = '';
        lesson.objectives.forEach(obj => {
            const li = document.createElement('li');
            li.textContent = obj;
            elements.objectivesList.appendChild(li);
        });

        // Body Content
        elements.lessonBody.innerHTML = '';
        lesson.content.forEach(block => {
            if (block.type === 'text') {
                const p = document.createElement('p');
                p.innerHTML = block.text; // allowing basic HTML like <strong> or <code>
                elements.lessonBody.appendChild(p);
            } else if (block.type === 'heading') {
                const h = document.createElement('h3');
                h.textContent = block.text;
                elements.lessonBody.appendChild(h);
            } else if (block.type === 'code') {
                const wrapper = document.createElement('div');
                wrapper.className = 'code-block';
                wrapper.innerHTML = `
                    <div class="code-header">
                        <span>C#</span>
                        <button class="copy-btn" onclick="navigator.clipboard.writeText(\`${block.code.replace(/`/g, '\\`')}\`)">
                            <i class="fa-regular fa-copy"></i> Copy
                        </button>
                    </div>
                    <pre><code>${highlightCode(block.code)}</code></pre>
                `;
                elements.lessonBody.appendChild(wrapper);
            }
        });

        // Concept Note
        if (lesson.conceptNote) {
            elements.conceptNote.style.display = 'block';
            elements.conceptNoteContent.innerHTML = `<p>${lesson.conceptNote}</p>`;
        } else {
            elements.conceptNote.style.display = 'none';
        }

        // Real Use Case
        if (lesson.realUseCase) {
            elements.realUseCase.style.display = 'block';
            elements.realUseCaseContent.innerHTML = `<p>${lesson.realUseCase}</p>`;
        } else {
            elements.realUseCase.style.display = 'none';
        }

        // Exercises
        if (lesson.exercises && lesson.exercises.length > 0) {
            elements.exercisesSection.style.display = 'block';
            elements.exercisesContainer.innerHTML = '';
            
            lesson.exercises.forEach((ex, idx) => {
                const card = document.createElement('div');
                card.className = 'exercise-card';
                
                card.innerHTML = `
                    <div class="exercise-header">
                        <h4><span style="color: var(--text-muted); font-size: 0.85em; margin-right: 0.5rem;">[${ex.type || 'Exercise'}]</span> ข้อที่ ${idx + 1}</h4>
                        <span class="exercise-level level-${(ex.difficulty || ex.level || 'easy').toLowerCase()}">${ex.difficulty || ex.level || 'Easy'}</span>
                    </div>
                    <p style="font-size: 1.05rem; font-weight: 500;">${ex.instruction}</p>
                    
                    ${ex.codeSnippet ? `<div class="code-block" style="margin-top: 1rem; margin-bottom: 1rem;"><pre><code>${highlightCode(ex.codeSnippet)}</code></pre></div>` : ''}
                    
                    <div class="exercise-actions" style="margin-top: 1.5rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${ex.hint ? `<button class="btn btn-secondary hint-btn"><i class="fa-solid fa-lightbulb"></i> Show Hint</button>` : ''}
                        <button class="btn btn-primary reveal-btn"><i class="fa-solid fa-eye"></i> Show Solution</button>
                    </div>
                    
                    ${ex.hint ? `
                    <div class="exercise-hint hidden" style="margin-top: 1rem; padding: 1rem; background: rgba(245, 158, 11, 0.1); border-left: 3px solid var(--accent-warning); border-radius: 4px;">
                        <i class="fa-solid fa-key" style="color: var(--accent-warning);"></i> <strong>Hint:</strong> ${ex.hint}
                    </div>` : ''}
                    
                    <div class="exercise-answer hidden" style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px dashed var(--border-color);">
                        ${ex.answer ? `<div class="code-block"><pre><code>${highlightCode(ex.answer)}</code></pre></div>` : ''}
                        
                        ${ex.explanation ? `
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--accent-success); border-radius: 4px;">
                            <strong style="color: var(--accent-success);"><i class="fa-solid fa-comment-dots"></i> Explanation:</strong><br><span style="color: var(--text-secondary);">${ex.explanation}</span>
                        </div>` : ''}
                        
                        ${ex.commonMistake ? `
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-left: 3px solid var(--accent-danger); border-radius: 4px;">
                            <strong style="color: var(--accent-danger);"><i class="fa-solid fa-triangle-exclamation"></i> Common Bug / Mistake:</strong><br><span style="color: var(--text-secondary);">${ex.commonMistake}</span>
                        </div>` : ''}
                    </div>
                `;
                
                const revealBtn = card.querySelector('.reveal-btn');
                const answerDiv = card.querySelector('.exercise-answer');
                revealBtn.addEventListener('click', () => {
                    answerDiv.classList.toggle('hidden');
                    if (answerDiv.classList.contains('hidden')) {
                        revealBtn.innerHTML = '<i class="fa-solid fa-eye"></i> Show Solution';
                        revealBtn.classList.replace('btn-secondary', 'btn-primary');
                    } else {
                        revealBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Hide Solution';
                        revealBtn.classList.replace('btn-primary', 'btn-secondary');
                    }
                });
                
                const hintBtn = card.querySelector('.hint-btn');
                if (hintBtn) {
                    const hintDiv = card.querySelector('.exercise-hint');
                    hintBtn.addEventListener('click', () => {
                        hintDiv.classList.toggle('hidden');
                    });
                }
                
                elements.exercisesContainer.appendChild(card);
            });
        } else {
            elements.exercisesSection.style.display = 'none';
        }

        // Quiz
        if (lesson.quiz && lesson.quiz.length > 0) {
            elements.quizSection.style.display = 'block';
            elements.quizContainer.innerHTML = '';
            
            lesson.quiz.forEach((q, qIdx) => {
                const qDiv = document.createElement('div');
                qDiv.className = 'quiz-question';
                qDiv.dataset.correct = q.answerIndex;
                
                let optionsHtml = '';
                q.options.forEach((opt, oIdx) => {
                    optionsHtml += `
                        <div class="quiz-option" data-idx="${oIdx}">
                            <div class="radio-circle"><i class="fa-regular fa-circle"></i></div>
                            <span>${opt}</span>
                        </div>
                    `;
                });
                
                qDiv.innerHTML = `
                    <h4>Q${qIdx + 1}: ${q.question}</h4>
                    <div class="quiz-options">${optionsHtml}</div>
                    <div class="quiz-explanation hidden">
                        <strong>Explanation:</strong> ${q.explanation}
                    </div>
                `;
                
                // Add click handlers
                const options = qDiv.querySelectorAll('.quiz-option');
                options.forEach(opt => {
                    opt.addEventListener('click', function() {
                        if (qDiv.classList.contains('answered')) return;
                        
                        // Select
                        options.forEach(o => {
                            o.classList.remove('selected');
                            o.querySelector('i').className = 'fa-regular fa-circle';
                        });
                        this.classList.add('selected');
                        this.querySelector('i').className = 'fa-solid fa-circle-dot';
                    });
                });
                
                elements.quizContainer.appendChild(qDiv);
            });
            
            const submitQuizBtn = document.createElement('button');
            submitQuizBtn.className = 'btn btn-primary submit-quiz-btn';
            submitQuizBtn.textContent = 'Check Answers';
            submitQuizBtn.addEventListener('click', () => checkQuiz(lesson.quiz));
            elements.quizContainer.appendChild(submitQuizBtn);
            
        } else {
            elements.quizSection.style.display = 'none';
        }

        // Update Nav & Buttons
        updateNavButtons();
        renderSidebar(); // Refresh active state
        
        // Scroll to top
        elements.lessonContainer.scrollTop = 0;
        
        // Mobile Sidebar Close
        if (window.innerWidth <= 768) {
            elements.sidebar.classList.remove('open');
        }
    }

    function checkQuiz(quizData) {
        const questions = elements.quizContainer.querySelectorAll('.quiz-question');
        let allAnswered = true;
        
        questions.forEach((q, idx) => {
            const selected = q.querySelector('.quiz-option.selected');
            if (!selected) {
                allAnswered = false;
                return;
            }
            
            q.classList.add('answered');
            const selectedIdx = parseInt(selected.dataset.idx);
            const correctIdx = quizData[idx].answerIndex;
            
            const options = q.querySelectorAll('.quiz-option');
            options.forEach(opt => {
                opt.style.pointerEvents = 'none';
                const oIdx = parseInt(opt.dataset.idx);
                if (oIdx === correctIdx) {
                    opt.classList.add('correct');
                    opt.querySelector('i').className = 'fa-solid fa-check';
                } else if (oIdx === selectedIdx && selectedIdx !== correctIdx) {
                    opt.classList.add('wrong');
                    opt.querySelector('i').className = 'fa-solid fa-xmark';
                }
            });
            
            q.querySelector('.quiz-explanation').classList.remove('hidden');
        });
        
        if (!allAnswered) {
            alert('Please answer all questions before checking.');
        } else {
            elements.quizContainer.querySelector('.submit-quiz-btn').style.display = 'none';
        }
    }

    // Navigation and Progress
    function updateNavButtons() {
        const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
        
        if (currentIndex > 0) {
            elements.prevBtn.style.display = 'inline-flex';
            elements.prevBtn.onclick = () => loadLesson(allLessons[currentIndex - 1].id);
        } else {
            elements.prevBtn.style.display = 'none';
        }
        
        if (currentIndex < allLessons.length - 1) {
            elements.nextBtn.style.display = 'inline-flex';
            elements.nextBtn.onclick = () => loadLesson(allLessons[currentIndex + 1].id);
        } else {
            elements.nextBtn.style.display = 'none';
        }
        
        // Mark complete button logic
        if (completedLessons.includes(currentLessonId)) {
            elements.markCompleteBtn.innerHTML = '<i class="fa-solid fa-check-double"></i> Completed';
            elements.markCompleteBtn.classList.replace('btn-secondary', 'btn-success');
        } else {
            elements.markCompleteBtn.innerHTML = '<i class="fa-solid fa-check"></i> Mark as Completed';
            elements.markCompleteBtn.classList.replace('btn-success', 'btn-secondary');
        }
    }

    function toggleMarkComplete() {
        if (!currentLessonId) return;
        
        if (completedLessons.includes(currentLessonId)) {
            completedLessons = completedLessons.filter(id => id !== currentLessonId);
        } else {
            completedLessons.push(currentLessonId);
        }
        
        localStorage.setItem('csharp_completed_lessons', JSON.stringify(completedLessons));
        updateProgress();
        updateNavButtons();
        renderSidebar();
    }

    function updateProgress() {
        const total = allLessons.length;
        if (total === 0) return;
        
        const completed = completedLessons.length;
        const percentage = Math.round((completed / total) * 100);
        
        elements.progressText.textContent = `${percentage}% Completed (${completed}/${total})`;
        elements.progressFill.style.width = `${percentage}%`;
    }

    // Library Reference Hub
    function showLibraryHub() {
        currentLessonId = null;
        elements.welcomeScreen.classList.add('hidden');
        elements.lessonView.classList.remove('hidden');
        
        elements.lessonModuleBadge.textContent = "Reference";
        elements.lessonLibraryBadge.classList.add('hidden');
        elements.lessonTitle.textContent = "📚 Library Reference Hub";
        
        elements.objectivesList.innerHTML = '<li>ศูนย์รวมคู่มือไลบรารีและคลาสที่สำคัญใน .NET</li>';
        elements.conceptNote.style.display = 'none';
        elements.realUseCase.style.display = 'none';
        elements.exercisesSection.style.display = 'none';
        elements.quizSection.style.display = 'none';
        elements.prevBtn.style.display = 'none';
        elements.nextBtn.style.display = 'none';
        elements.markCompleteBtn.style.display = 'none';
        
        // Render content
        elements.lessonBody.innerHTML = '';
        const libraries = window.libraryHubData || [];
        
        libraries.forEach(lib => {
            const libSection = document.createElement('div');
            libSection.innerHTML = `
                <h2 style="color: var(--accent-warning); margin-top: 2rem;"><i class="fa-solid fa-cube"></i> ${lib.namespace}</h2>
                <p><strong>ใช้งานเพื่อ:</strong> ${lib.purpose}</p>
            `;
            
            lib.classes.forEach(cls => {
                let propsHtml = cls.properties.map(p => `<li><code>${p.name}</code> : ${p.desc}</li>`).join('');
                let methodsHtml = cls.methods.map(m => `<li><code>${m.name}</code> : ${m.desc}</li>`).join('');
                let eventsHtml = (cls.events || []).map(e => `<li><code>${e.name}</code> : ${e.desc}</li>`).join('');
                
                let clsHtml = `
                    <div style="background-color: var(--bg-surface); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color); margin-top: 1.5rem;">
                        <h3 style="color: var(--accent-primary);"><i class="fa-solid fa-puzzle-piece"></i> Class: ${cls.name}</h3>
                        <p>${cls.desc}</p>
                        
                        ${propsHtml ? `<h4><i class="fa-solid fa-list"></i> Properties</h4><ul>${propsHtml}</ul>` : ''}
                        ${methodsHtml ? `<h4><i class="fa-solid fa-bolt"></i> Methods</h4><ul>${methodsHtml}</ul>` : ''}
                        ${eventsHtml ? `<h4><i class="fa-solid fa-rss"></i> Events</h4><ul>${eventsHtml}</ul>` : ''}
                        
                        ${cls.example ? `<h4><i class="fa-solid fa-code"></i> Example</h4><div class="code-block"><pre><code>${highlightCode(cls.example)}</code></pre></div>` : ''}
                    </div>
                `;
                libSection.innerHTML += clsHtml;
            });
            
            elements.lessonBody.appendChild(libSection);
        });
        
        // Mobile Sidebar Close
        if (window.innerWidth <= 768) {
            elements.sidebar.classList.remove('open');
        }
        elements.lessonContainer.scrollTop = 0;
    }

    // Event Listeners
    function setupEventListeners() {
        elements.sidebarToggle.addEventListener('click', () => {
            elements.sidebar.classList.toggle('open');
        });
        
        elements.mobileToggle.addEventListener('click', () => {
            elements.sidebar.classList.remove('open');
        });
        
        elements.searchInput.addEventListener('input', (e) => {
            renderSidebar(e.target.value);
        });
        
        elements.startBtn.addEventListener('click', () => {
            if (allLessons.length > 0) {
                loadLesson(allLessons[0].id);
            }
        });
        
        if (elements.libraryHubBtn) {
            elements.libraryHubBtn.addEventListener('click', showLibraryHub);
        }
        
        elements.markCompleteBtn.addEventListener('click', toggleMarkComplete);
        
        // Allow using lesson-container directly
        elements.lessonContainer = document.getElementById('lesson-container');
    }

    // Run
    init();
});
