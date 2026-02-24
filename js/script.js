// Data
const floors = [
    { id: -2, name: "-2", viewBox: "0 0 1000 1000" },
    { id: -1, name: "-1", viewBox: "0 0 1000 1000" },
    { id: 0, name: "0", viewBox: "0 0 1000 1000" },
    { id: 1, name: "1", viewBox: "0 0 1000 1000" },
    { id: 2, name: "2", viewBox: "0 0 1000 1000" },
    { id: 3, name: "3", viewBox: "0 0 1000 1000" },
    { id: 4, name: "4", viewBox: "0 0 1000 1000" }
];

const locations = [
    { id: 1, name: "SCP-012", floor: 1, coordinates: { x: 417.5, y: 492 }, description: "Скверная мелодия", category: "research" },
    { id: 2, name: "SCP-035", floor: -2, coordinates: { x: 193.5, y: 698.5 }, description: "Маска одержимости", category: "research" },
    { id: 3, name: "SCP-049", floor: 1, coordinates: { x: 664, y: 422 }, description: "Чумной доктор", category: "research" },
    { id: 4, name: "SCP-066", floor: 1, coordinates: { x: 545, y: 517 }, description: "Игрушка эрика", category: "research" },
    { id: 5, name: "SCP-096", floor: 1, coordinates: { x: 706.5, y: 441.5 }, description: "Скромник", category: "research" },
    { id: 7, name: "SCP-106", floor: 1, coordinates: { x: 584, y: 309 }, description: "Старик", category: "research" },
    { id: 8, name: "SCP-173", floor: 1, coordinates: { x: 419.5, y: 432 }, description: "Скульптура", category: "research" },
    { id: 9, name: "SCP-294", floor: 2, coordinates: { x: 610, y: 675 }, description: "Кофейный автомат", category: "research" },
    { id: 10, name: "SCP-330", floor: 1, coordinates: { x: 523, y: 524 }, description: "Не берите больше двух", category: "research" },
    { id: 11, name: "SCP-682", floor: 0, coordinates: { x: 196, y: 407.5 }, description: "Неуязвимая рептилия", category: "research" },
    { id: 12, name: "SCP-797", floor: 1, coordinates: { x: 312.5, y: 488 }, description: "Любопытный полтергейст", category: "research" },
    { id: 13, name: "SCP-914", floor: 1, coordinates: { x: 372.5, y: 498 }, description: "Часовой механизм", category: "research" },
    { id: 14, name: "SCP-939", floor: 0, coordinates: { x: 123, y: 575 }, description: "Со множеством голосов", category: "research" },
    { id: 15, name: "SCP-966", floor: 1, coordinates: { x: 572, y: 459 }, description: "Бессонники", category: "research" },
    { id: 16, name: "SCP-999", floor: 1, coordinates: { x: 481, y: 433.5 }, description: "Щекоточный монстр", category: "research" },
    { id: 17, name: "SCP-1025", floor: 1, coordinates: { x: 518.5, y: 511 }, description: "Энциклопедия заболеваний", category: "research" },
    
    { id: 18, name: "D-Блок", floor: 1, coordinates: { x: 393, y: 320 }, description: " ", category: "common" },
    { id: 19, name: "Карцер", floor: 0, coordinates: { x: 429, y: 342.5 }, description: " ", category: "common" },
    { id: 20, name: "Кабинет НСБ", floor: 2, coordinates: { x: 384, y: 366 }, description: " ", category: "common" },
    { id: 21, name: "Центр переподготовки", floor: 3, coordinates: { x: 426, y: 352 }, description: " ", category: "common" },
    
    { id: 22, name: "LCZ", floor: 1, coordinates: { x: 369, y: 397 }, description: "Шелтер D-Блока", category: "shelter" },
    { id: 23, name: "EZ №1", floor: 1, coordinates: { x: 531, y: 557 }, description: "Шелтер ТГ", category: "shelter" },
    { id: 24, name: "EZ №2", floor: 2, coordinates: { x: 509, y: 694 }, description: "Шелтер ГП", category: "shelter" },
    { id: 42, name: "HCZ-A", floor: 1, coordinates: { x: 358, y: 556 }, description: "Шелтер Кетер зоны", category: "shelter" },
    
    { id: 25, name: "Казармы СБ", floor: 1, coordinates: { x: 377, y: 466 }, description: " ", category: "common" },
    { id: 26, name: "Казармы ТГ", floor: 1, coordinates: { x: 544, y: 560 }, description: " ", category: "common" },
    { id: 27, name: "Кабинет ДЗ", floor: 1, coordinates: { x: 560, y: 659 }, description: " ", category: "common" },
    { id: 28, name: "Комната допроса", floor: 1, coordinates: { x: 583, y: 586 }, description: " ", category: "common" },
    
    { id: 29, name: "LCZ - HCZ-A №1", floor: 1, coordinates: { x: 292, y: 442 }, description: " ", category: "checkpoint" },
    { id: 30, name: "LCZ - HCZ-A №2", floor: 1, coordinates: { x: 349, y: 499 }, description: " ", category: "checkpoint" },
    { id: 31, name: "LCZ - EZ", floor: 1, coordinates: { x: 462, y: 536 }, description: "Быстрый чекпоинт", category: "checkpoint" },
    { id: 32, name: "LCZ - HCZ-B", floor: 1, coordinates: { x: 559, y: 479 }, description: " ", category: "checkpoint" },
    { id: 33, name: "EZ - HCZ-B", floor: 1, coordinates: { x: 559, y: 555 }, description: " ", category: "checkpoint" },
    { id: 34, name: "EZ - HCZ-A", floor: 1, coordinates: { x: 443, y: 631 }, description: " ", category: "checkpoint" },
    
    { id: 35, name: "Блок исследований", floor: 1, coordinates: { x: 537, y: 712 }, description: " ", category: "common" },
    { id: 36, name: "Кабинет ГП", floor: 2, coordinates: { x: 537, y: 697 }, description: " ", category: "common" },
    { id: 37, name: "Кафетерий", floor: 2, coordinates: { x: 607, y: 655 }, description: " ", category: "common" },
    { id: 38, name: "Склад", floor: -1, coordinates: { x: 559, y: 538 }, description: " ", category: "common" },
    { id: 40, name: "Gate-A", floor: 3, coordinates: { x: 722, y: 644 }, description: " ", category: "common" },
    { id: 41, name: "Gate-B", floor: -1, coordinates: { x: 409, y: 684 }, description: " ", category: "common" },
];

// SVG images - обновлено для поддержки двух дизайнов
const svgImages = {
    '-2': {
        default: 'maps/map_-2.svg',
        alternative: 'maps/zone_-2.svg'
    },
    '-1': {
        default: 'maps/map_-1.svg',
        alternative: 'maps/zone_-1.svg'
    },
    '0': {
        default: 'maps/map_0.svg',
        alternative: 'maps/zone_0.svg'
    },
    '1': {
        default: 'maps/map_1.svg',
        alternative: 'maps/zone_1.svg'
    },
    '2': {
        default: 'maps/map_2.svg',
        alternative: 'maps/zone_2.svg'
    },
    '3': {
        default: 'maps/map_3.svg',
        alternative: 'maps/zone_3.svg'
    },
    '4': {
        default: 'maps/map_4.svg',
        alternative: 'maps/zone_4.svg'
    }
};

// State
let currentFloor = 1;
let currentTransform = {
    x: 0,
    y: 0,
    scale: 1
};
let isDragging = false;
let lastMousePosition = { x: 0, y: 0 };
let isAnimating = false;
let animationFrameId = null;
let containerSize = { width: 0, height: 0 };
let activeMarkers = new Map();
let activePopup = null;

// Новое состояние
let searchQuery = '';
let isPanelOpen = true;
let collapsedCategories = new Set();
let selectionTimers = new Map();
let useAlternativeDesign = false; // Новое состояние для альтернативного дизайна
let floorTransitionInProgress = false; // Флаг для отслеживания анимации перехода

// DOM Elements
const mapContainer = document.getElementById('map-container');
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');
const zoomLevel = document.getElementById('zoom-level');
const floorBtns = document.querySelectorAll('.floor-btn');

// Initialize
function init() {
    // Инициализация нового UI
    initNewUI();
    
    // Create floor containers
    initFloorContainers();
    
    // Store initial container size
    containerSize = {
        width: mapContainer.clientWidth,
        height: mapContainer.clientHeight
    };
    
    // Event listeners for zoom controls
    zoomInBtn.addEventListener('click', () => zoom(2));
    zoomOutBtn.addEventListener('click', () => zoom(-2));
    
    // Event listeners for floor controls
    floorBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const floor = parseInt(btn.dataset.floor);
            if (floor !== currentFloor && !floorTransitionInProgress) {
                switchFloorWithAnimation(floor);
                
                floorBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
    
    // Map dragging events
    const mapOverlay = document.getElementById('map-overlay');
    const coordinatesDisplay = document.getElementById('coordinates-display');
    
    mapOverlay.addEventListener('mousemove', (e) => {
        if (isAnimating) return;
        
        const rect = mapContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Calculate coordinates in SVG coordinate system
        const currentSvg = document.querySelector(`.floor-container[data-floor="${currentFloor}"] .default-design`);
        if (!currentSvg) return;
        
        const pt = currentSvg.createSVGPoint();
        pt.x = mouseX;
        pt.y = mouseY;
        const svgP = pt.matrixTransform(currentSvg.getScreenCTM().inverse());
        
        coordinatesDisplay.textContent = `X: ${Math.round(svgP.x)}, Y: ${Math.round(svgP.y)}`;
    });

    mapOverlay.addEventListener('mousedown', (e) => {
        if (isAnimating) return;
        e.preventDefault();
        startDrag(e);
    });
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('mouseleave', () => {
        endDrag();
        coordinatesDisplay.textContent = 'X: 0, Y: 0';
    });
    
    // Zoom with mouse wheel
    mapContainer.addEventListener('wheel', handleWheel, { passive: false });
    
    // Update zoom level display
    zoomLevel.textContent = `${Math.round(currentTransform.scale * 10)}%`;
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
    
    // Преобразование структуры
    migrateToNewStructure();
    
    // Инициализация переключателя дизайна
    initDesignToggle();
}

// Инициализация переключателя дизайна
function initDesignToggle() {
    const designToggle = document.getElementById('design-toggle');
    if (designToggle) {
        designToggle.addEventListener('change', function() {
            useAlternativeDesign = this.checked;
            switchDesignWithAnimation();
        });
    }
}

// Анимированное переключение дизайна
function switchDesignWithAnimation() {
    const allFloors = document.querySelectorAll('.floor-container');
    
    allFloors.forEach(container => {
        const defaultDesign = container.querySelector('.default-design');
        const alternativeDesign = container.querySelector('.alternative-design');
        
        if (useAlternativeDesign) {
            defaultDesign.classList.add('hidden');
            alternativeDesign.classList.add('active');
        } else {
            defaultDesign.classList.remove('hidden');
            alternativeDesign.classList.remove('active');
        }
    });
}

// Анимированное переключение этажа
function switchFloorWithAnimation(newFloor) {
    if (floorTransitionInProgress) return;
    
    floorTransitionInProgress = true;
    
    const currentFloorContainer = document.querySelector(`.floor-container[data-floor="${currentFloor}"]`);
    const newFloorContainer = document.querySelector(`.floor-container[data-floor="${newFloor}"]`);
    
    if (!currentFloorContainer || !newFloorContainer) {
        floorTransitionInProgress = false;
        return;
    }
    
    // Показываем новый этаж поверх текущего
    newFloorContainer.style.display = 'block';
    newFloorContainer.style.zIndex = '2';
    currentFloorContainer.style.zIndex = '1';
    
    // Запускаем анимацию
    setTimeout(() => {
        newFloorContainer.classList.add('active');
        currentFloorContainer.classList.remove('active');
    }, 10);
    
    // После завершения анимации скрываем старый этаж и обновляем состояние
    setTimeout(() => {
        currentFloorContainer.style.display = 'none';
        currentFloor = newFloor;
        floorTransitionInProgress = false;
        applyTransform();
        
        // Обновляем маркеры если они есть
        updateMarkerSizes();
    }, 500);
}

// Инициализация нового UI
function initNewUI() {
    initNewPanel();
    setupSearch();
    setupCategories();
    setupHotkeys();
    updatePanelHandlers();
}

// Инициализация новой панели
function initNewPanel() {
    // Удаляем старую структуру, если она существует
    const oldList = document.getElementById('locations-list');
    if (oldList) {
        oldList.remove();
    }
    
    // Инициализируем состояние панели
    updatePanelVisibility();
}

// Настройка поиска
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase();
            filterLocations();
        });
    }
}

// Настройка категорий
function setupCategories() {
    updateCategoryHandlers();
}

// Настройка горячих клавиш
function setupHotkeys() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'r' || e.key === 'R') {
            e.preventDefault();
            resetView();
        }
    });
}

// Обновление обработчиков кнопок панели
function updatePanelHandlers() {
    const toggleBtn = document.getElementById('toggle-panel');
    const expandBtn = document.getElementById('expand-panel');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            isPanelOpen = !isPanelOpen;
            updatePanelVisibility();
        });
    }
    
    if (expandBtn) {
        expandBtn.addEventListener('click', () => {
            isPanelOpen = true;
            updatePanelVisibility();
        });
    }
}

// Фильтрация локаций
function filterLocations() {
    const locationItems = document.querySelectorAll('.location-item-new');
    const categories = document.querySelectorAll('.category-group');
    
    let hasVisibleItems = false;
    
    categories.forEach(category => {
        const categoryLocations = category.querySelectorAll('.location-item-new');
        let categoryHasVisible = false;
        
        categoryLocations.forEach(item => {
            const locationName = item.querySelector('.location-name').textContent.toLowerCase();
            const locationDesc = item.querySelector('.location-desc')?.textContent.toLowerCase() || '';
            const isVisible = !searchQuery || locationName.includes(searchQuery) || locationDesc.includes(searchQuery);
            
            item.style.display = isVisible ? 'flex' : 'none';
            
            if (isVisible) {
                categoryHasVisible = true;
                hasVisibleItems = true;
            }
        });
        
        // Показываем/скрываем категорию в зависимости от наличия видимых элементов
        category.style.display = categoryHasVisible ? 'block' : 'none';
    });
    
    // Показываем сообщение, если ничего не найдено
    showNoResultsMessage(!hasVisibleItems && searchQuery);
}

// Показать сообщение "нет результатов"
function showNoResultsMessage(show) {
    let noResults = document.getElementById('no-results-message');
    
    if (show && !noResults) {
        noResults = document.createElement('div');
        noResults.id = 'no-results-message';
        noResults.className = 'no-results';
        noResults.textContent = 'Локации не найдены';
        noResults.style.cssText = `
            text-align: center;
            color: rgba(255,255,255,0.5);
            padding: 20px;
            font-size: 14px;
        `;
        
        const categoriesList = document.getElementById('categories-list');
        if (categoriesList) {
            categoriesList.appendChild(noResults);
        }
    } else if (!show && noResults) {
        noResults.remove();
    }
}

// Обновление обработчиков категорий
function updateCategoryHandlers() {
    // Добавляем обработчики для нового дизайна
    const newHeaders = document.querySelectorAll('.category-header-new');
    newHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const category = header.dataset.category;
            toggleCategory(category);
        });
    });
    
    // Обновляем обработчики для элементов локаций
    updateLocationItemHandlers();
}

// Обновление обработчиков элементов локаций
function updateLocationItemHandlers() {
    const locationItems = document.querySelectorAll('.location-item-new');
    
    locationItems.forEach(item => {
        const locationId = parseInt(item.dataset.id);
        
        // Обработчик клика по локации
        item.addEventListener('click', (e) => {
            navigateToLocation(locationId);
        });
    });
}

// Переключение категории
function toggleCategory(category) {
    if (collapsedCategories.has(category)) {
        collapsedCategories.delete(category);
    } else {
        collapsedCategories.add(category);
    }
    
    // Обновляем отображение
    updateCategoryDisplay(category);
}

// Обновление отображения категории
function updateCategoryDisplay(category) {
    const header = document.querySelector(`.category-header-new[data-category="${category}"]`);
    const locations = document.querySelector(`.category-locations[data-category="${category}"]`);
    
    if (header && locations) {
        const isCollapsed = collapsedCategories.has(category);
        header.classList.toggle('collapsed', isCollapsed);
        locations.classList.toggle('collapsed', isCollapsed);
    }
}

// Сброс вида
function resetView() {
    if (isAnimating) return;
    
    currentTransform.x = 0;
    currentTransform.y = 0;
    currentTransform.scale = 1;
    
    applyTransform();
    zoomLevel.textContent = '10%';
    
    // Убираем все временные маркеры
    removeAllTemporaryMarkers();
}

// Обновление видимости панели
function updatePanelVisibility() {
    const panel = document.getElementById('locations-panel');
    const collapsedPanel = document.getElementById('collapsed-panel');
    
    if (panel && collapsedPanel) {
        if (isPanelOpen) {
            panel.classList.remove('collapsed');
            collapsedPanel.style.display = 'none';
        } else {
            panel.classList.add('collapsed');
            collapsedPanel.style.display = 'block';
        }
    }
}

// Функция для преобразования старой структуры в новую
function migrateToNewStructure() {
    const categories = [
        { id: 'common', name: 'Общие помещения', color: 'category-color-common', iconColor: 'location-icon-common' },
        { id: 'shelter', name: 'Шелтеры', color: 'category-color-shelter', iconColor: 'location-icon-shelter' },
        { id: 'checkpoint', name: 'Чекпоинты', color: 'category-color-checkpoint', iconColor: 'location-icon-checkpoint' },
        { id: 'research', name: 'Объекты SCP', color: 'category-color-research', iconColor: 'location-icon-research' }
    ];
    
    const categoriesList = document.getElementById('categories-list');
    if (!categoriesList) return;
    
    let newHTML = '';
    
    categories.forEach(category => {
        const categoryLocations = locations.filter(loc => loc.category === category.id);
        
        newHTML += `
            <div class="category-group">
                <div class="category-header-new" data-category="${category.id}">
                    <div class="category-dot ${category.color}"></div>
                    <span class="category-name">${category.name}</span>
                    <span class="category-count">${categoryLocations.length}</span>
                    <svg class="category-arrow-new" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </div>
                <div class="category-locations" data-category="${category.id}">
                    ${categoryLocations.map(location => `
                        <div class="location-item-new" data-id="${location.id}">
                            <svg class="location-icon ${category.iconColor}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <div class="location-info">
                                <div class="location-name">${location.name}</div>
                                <div class="location-floor">Этаж: ${location.floor}</div>
                                ${location.description && location.description.trim() ? `<div class="location-desc">${location.description}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    categoriesList.innerHTML = newHTML;
    
    // Обновляем обработчики после преобразования
    updateCategoryHandlers();
    updateLocationItemHandlers();
}

// Handle window resize
function handleResize() {
    if (isAnimating) return;
    
    const newWidth = mapContainer.clientWidth;
    const newHeight = mapContainer.clientHeight;
    
    if (newWidth === containerSize.width && newHeight === containerSize.height) {
        return;
    }
    
    containerSize = { width: newWidth, height: newHeight };
    applyTransform();
}

// Create floor containers with inline SVG
function initFloorContainers() {
    mapContainer.innerHTML = '';
    
    Object.keys(svgImages).forEach(floor => {
        const container = document.createElement('div');
        container.className = 'floor-container';
        container.dataset.floor = floor;
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.display = 'none';
        
        // Создаем два слоя для дизайнов
        const defaultSvg = createFloorSVG(floor, 'default');
        const alternativeSvg = createFloorSVG(floor, 'alternative');
        
        container.appendChild(defaultSvg);
        container.appendChild(alternativeSvg);
        mapContainer.appendChild(container);
    });
    
    // Add overlay
    const overlay = document.createElement('div');
    overlay.id = 'map-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '10';
    mapContainer.appendChild(overlay);
    
    // Show default floor
    showFloor(currentFloor);
}

// Вспомогательная функция для создания SVG
function createFloorSVG(floor, designType) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('floor-svg', 'design-layer', `${designType}-design`);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // Set viewBox based on floor data
    const floorData = floors.find(f => f.id.toString() === floor);
    if (floorData && floorData.viewBox) {
        svg.setAttribute('viewBox', floorData.viewBox);
    }
    
    // Load SVG content
    const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    const designKey = designType === 'alternative' ? 'alternative' : 'default';
    image.setAttribute('href', svgImages[floor][designKey]);
    image.setAttribute('width', '100%');
    image.setAttribute('height', '100%');
    image.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    svg.appendChild(image);
    return svg;
}

// Show specific floor
function showFloor(floor) {
    const containers = document.querySelectorAll('.floor-container');
    containers.forEach(container => {
        if (container.dataset.floor === floor.toString()) {
            container.style.display = 'block';
            container.classList.add('active');
        } else {
            container.style.display = 'none';
            container.classList.remove('active');
        }
    });
    
    applyTransform();
}

// Load floor
function loadFloor(floor) {
    // Remove all temporary markers when switching floors
    removeAllTemporaryMarkers();
    showFloor(floor);
}

// Show temporary marker at location
function showTemporaryMarker(location) {
    // Remove existing marker for this location
    removeTemporaryMarker(location.id);
    
    const floorContainer = document.querySelector(`.floor-container[data-floor="${location.floor}"]`);
    if (!floorContainer) return;
    
    const activeDesign = useAlternativeDesign ? 
        floorContainer.querySelector('.alternative-design') : 
        floorContainer.querySelector('.default-design');
    
    if (!activeDesign) return;
    
    // Create marker group
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'location-marker-group temporary');
    g.setAttribute('data-location-id', location.id);
    
    // Calculate marker size based on current zoom scale
    const baseSize = 8; // Base size at 100% zoom
    const currentSize = baseSize / currentTransform.scale;
    const minSize = 2; // Minimum size to prevent markers from becoming too small
    const maxSize = 30; // Increased maximum size to prevent markers from becoming too small at high zoom
    const markerSize = Math.max(minSize, Math.min(maxSize, currentSize));
    
    // Calculate proportional stroke width (25% of radius, minimum 1)
    const strokeWidth = Math.max(1, markerSize * 0.25);
    
    // Create circle marker with proportional stroke
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('class', 'location-marker');
    circle.setAttribute('cx', location.coordinates.x);
    circle.setAttribute('cy', location.coordinates.y);
    circle.setAttribute('r', markerSize);
    circle.setAttribute('stroke-width', strokeWidth);

    // Add hover effects
    g.addEventListener('mouseover', function() {
        circle.setAttribute('filter', 'drop-shadow(0 0 15px rgba(250, 0, 90, 1))');
        circle.style.transform = 'scale(1.2)';
    });
    
    g.addEventListener('mouseout', function() {
        circle.setAttribute('filter', 'drop-shadow(0 0 10px rgba(250, 0, 90, 0.7))');
        circle.style.transform = 'scale(1)';
    });
    
    // Add click event to show popup
    g.addEventListener('click', function(e) {
        e.stopPropagation();
        showMarkerPopup(location, g);
    });
    
    // Store marker data for later updates
    g.markerData = {
        baseSize: baseSize,
        minSize: minSize,
        maxSize: maxSize
    };
    
    g.appendChild(circle);
    activeDesign.appendChild(g);
    
    // Set timer to remove marker after 5 seconds
    const timer = setTimeout(() => {
        removeTemporaryMarker(location.id);
    }, 5000);
    
    // Store marker and timer
    activeMarkers.set(location.id, { element: g, timer });
}

// Show popup for marker
function showMarkerPopup(location, markerGroup) {
    // Remove existing popup
    if (activePopup) {
        activePopup.remove();
        activePopup = null;
    }
    
    const svg = markerGroup.ownerSVGElement;
    if (!svg) return;
    
    // Get marker position
    const circle = markerGroup.querySelector('circle');
    const cx = parseFloat(circle.getAttribute('cx'));
    const cy = parseFloat(circle.getAttribute('cy'));
    const r = parseFloat(circle.getAttribute('r'));
    
    // Create popup group
    const popupGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    popupGroup.setAttribute('class', 'marker-popup-group');
    
    // Create popup background
    const popupBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    popupBg.setAttribute('class', 'marker-popup');
    
    // Create popup text
    const popupText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    popupText.setAttribute('class', 'marker-popup-text');
    
    // Create title
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    title.setAttribute('class', 'marker-popup-title');
    title.setAttribute('x', 0);
    title.setAttribute('dy', '1.2em');
    title.textContent = location.name;
    
    // Create description
    const description = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    description.setAttribute('class', 'marker-popup-desc');
    description.setAttribute('x', 0);
    description.setAttribute('dy', '1.2em');
    description.textContent = location.description || `Этаж: ${location.floor}`;
    
    // Create floor info
    const floorInfo = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    floorInfo.setAttribute('class', 'marker-popup-desc');
    floorInfo.setAttribute('x', 0);
    floorInfo.setAttribute('dy', '1.2em');
    floorInfo.textContent = `Этаж: ${location.floor}`;
    
    popupText.appendChild(title);
    popupText.appendChild(description);
    popupText.appendChild(floorInfo);
    
    // Calculate text dimensions
    const textBBox = popupText.getBBox();
    const padding = 10;
    const popupWidth = Math.max(150, textBBox.width + padding * 2);
    const popupHeight = textBBox.height + padding * 2;
    
    // Position popup above marker
    const popupX = cx - popupWidth / 2;
    const popupY = cy - r - popupHeight - 15;
    
    // Set popup background
    popupBg.setAttribute('x', popupX);
    popupBg.setAttribute('y', popupY);
    popupBg.setAttribute('width', popupWidth);
    popupBg.setAttribute('height', popupHeight);
    
    // Set text position
    popupText.setAttribute('x', popupX + padding);
    popupText.setAttribute('y', popupY + padding);
    
    // Create arrow
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrow.setAttribute('class', 'marker-popup-arrow');
    arrow.setAttribute('d', `M ${cx - 8} ${cy - r} L ${cx} ${cy - r - 8} L ${cx + 8} ${cy - r} Z`);
    
    popupGroup.appendChild(popupBg);
    popupGroup.appendChild(popupText);
    popupGroup.appendChild(arrow);
    svg.appendChild(popupGroup);
    
    activePopup = popupGroup;
    
    // Close popup when clicking elsewhere
    const closePopup = function(e) {
        if (!popupGroup.contains(e.target) && !markerGroup.contains(e.target)) {
            popupGroup.remove();
            activePopup = null;
            document.removeEventListener('click', closePopup);
        }
    };
    
    setTimeout(() => document.addEventListener('click', closePopup), 10);
}

// Update marker sizes based on current zoom level
function updateMarkerSizes() {
    for (const [locationId, marker] of activeMarkers.entries()) {
        const circle = marker.element.querySelector('circle');
        if (circle && marker.element.markerData) {
            const baseSize = marker.element.markerData.baseSize;
            const minSize = marker.element.markerData.minSize;
            const maxSize = marker.element.markerData.maxSize;
            
            // Calculate new size based on current zoom
            const currentSize = baseSize / currentTransform.scale;
            const markerSize = Math.max(minSize, Math.min(maxSize, currentSize));
            
            // Calculate proportional stroke width (25% of radius, minimum 1)
            const strokeWidth = Math.max(0.1, markerSize * 0.15);
            
            // Update circle size and stroke
            circle.setAttribute('r', markerSize);
            circle.setAttribute('stroke-width', strokeWidth);
        }
    }
}

// Remove temporary marker
function removeTemporaryMarker(locationId) {
    if (activeMarkers.has(locationId)) {
        const marker = activeMarkers.get(locationId);
        clearTimeout(marker.timer);
        if (marker.element && marker.element.parentNode) {
            marker.element.parentNode.removeChild(marker.element);
        }
        activeMarkers.delete(locationId);
    }
    
    // Remove popup if it exists
    if (activePopup) {
        activePopup.remove();
        activePopup = null;
    }
}

// Remove all temporary markers
function removeAllTemporaryMarkers() {
    for (const [locationId, marker] of activeMarkers.entries()) {
        clearTimeout(marker.timer);
        if (marker.element && marker.element.parentNode) {
            marker.element.parentNode.removeChild(marker.element);
        }
    }
    activeMarkers.clear();
    
    // Remove popup if it exists
    if (activePopup) {
        activePopup.remove();
        activePopup = null;
    }
}

// Navigation to location with smooth animation
function navigateToLocation(locationId) {
    if (isAnimating) return;
    
    const location = locations.find(l => l.id === locationId);
    if (!location) return;
    
    // Switch floor if needed first
    if (location.floor !== currentFloor && !floorTransitionInProgress) {
        switchFloorWithAnimation(location.floor);
        
        floorBtns.forEach(b => {
            b.classList.toggle('active', parseInt(b.dataset.floor) === location.floor);
        });
    }
    
    // Show temporary marker after floor is loaded
    setTimeout(() => {
        showTemporaryMarker(location);
    }, 600); // Увеличено время для завершения анимации перехода
    
    // Wait for floor to load before calculating position
    setTimeout(() => {
        // Calculate target scale and position using matrix transformations
        const targetScale = 6; // Increased to 600% zoom
        const containerWidth = mapContainer.clientWidth;
        const containerHeight = mapContainer.clientHeight;
        
        // Get the current SVG element
        const currentSvg = document.querySelector(`.floor-container[data-floor="${currentFloor}"] .default-design`);
        if (!currentSvg) return;
        
        // Create a point in SVG coordinates
        const svgPoint = currentSvg.createSVGPoint();
        svgPoint.x = location.coordinates.x;
        svgPoint.y = location.coordinates.y;
        
        // Create a temporary matrix for the target scale
        // We need to calculate where the point would be at the target scale
        const tempMatrix = currentSvg.getScreenCTM();
        const inverseMatrix = tempMatrix.inverse();
        
        // Calculate the screen position of the point at target scale
        // First, reset transformations to calculate base position
        const originalTransform = currentSvg.style.transform;
        currentSvg.style.transform = `scale(${targetScale})`;
        
        // Get the new transformation matrix
        const newMatrix = currentSvg.getScreenCTM();
        
        // Transform the SVG point to screen coordinates
        const screenPoint = svgPoint.matrixTransform(newMatrix);
        
        // Restore original transform
        currentSvg.style.transform = originalTransform;
        
        // Calculate target position to center the location
        const targetX = (containerWidth / 2) - screenPoint.x;
        const targetY = (containerHeight / 2) - screenPoint.y;
        
        animateNavigation(targetX, targetY, targetScale);
    }, 700); // Увеличено время для завершения всех анимаций
    
    // Обновляем UI выбранной локации
    updateSelectedLocation(locationId);
}

function updateSelectedLocation(locationId) {
    // Очищаем предыдущий таймер для этой локации
    if (selectionTimers.has(locationId)) {
        clearTimeout(selectionTimers.get(locationId));
        selectionTimers.delete(locationId);
    }
    
    // Убираем выделение со всех локаций
    document.querySelectorAll('.location-item-new').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Выделяем выбранную локацию
    const selectedItem = document.querySelector(`.location-item-new[data-id="${locationId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
        
        // Устанавливаем таймер для снятия выделения через 5 секунд
        const timer = setTimeout(() => {
            selectedItem.classList.remove('selected');
            selectionTimers.delete(locationId);
        }, 5000);
        
        selectionTimers.set(locationId, timer);
    }
}

// Animate navigation
function animateNavigation(targetX, targetY, targetScale) {
    isAnimating = true;
    
    const startX = currentTransform.x;
    const startY = currentTransform.y;
    const startScale = currentTransform.scale;
    
    const startTime = performance.now();
    const duration = 1000;
    
    function step(timestamp) {
        if (!isAnimating) return;
        
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeProgress = easeInOutCubic(progress);
        
        currentTransform.x = startX + (targetX - startX) * easeProgress;
        currentTransform.y = startY + (targetY - startY) * easeProgress;
        currentTransform.scale = startScale + (targetScale - startScale) * easeProgress;
        
        applyTransform();
        zoomLevel.textContent = `${Math.round(currentTransform.scale * 10)}%`;

        // Update marker sizes after zoom
        updateMarkerSizes();
        
        if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
        } else {
            isAnimating = false;
            animationFrameId = null;
        }
    }
    
    animationFrameId = requestAnimationFrame(step);
}

// Easing function
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Zoom functions
function zoom(direction) {
    if (isAnimating) return;
    const step = currentTransform.scale * 0.1; // 10% of current scale
    let newScale = currentTransform.scale + (direction * step);
    
    // Limit zoom range (1.0-20.0)
    newScale = Math.max(1.0, Math.min(50.0, newScale));
    // Get center of the viewport for zooming
    const containerWidth = mapContainer.clientWidth;
    const containerHeight = mapContainer.clientHeight;
    const zoomCenter = { x: containerWidth / 2, y: containerHeight / 2 };
    
    // Calculate the point to zoom toward (center of viewport)
    const scaleFactor = newScale / currentTransform.scale;
    
    // Adjust position to maintain the center point
    currentTransform.x = zoomCenter.x - (zoomCenter.x - currentTransform.x) * scaleFactor;
    currentTransform.y = zoomCenter.y - (zoomCenter.y - currentTransform.y) * scaleFactor;
    
    currentTransform.scale = newScale;
    
    applyTransform();
    zoomLevel.textContent = `${Math.round(newScale * 10)}%`;
   
    // Update marker sizes after zoom
    updateMarkerSizes();
}

function handleWheel(e) {
    if (isAnimating) return;
    
    e.preventDefault();
    
    const direction = e.deltaY < 0 ? 1 : -1;
    const step = currentTransform.scale * 0.1; // 10% of current scale
    let newScale = currentTransform.scale + (direction * step);
    
    newScale = Math.max(1.0, Math.min(50.0, newScale));
    // Get mouse position
    const rect = mapContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate the point to zoom toward
    const scaleFactor = newScale / currentTransform.scale;
    
    // Adjust position to zoom toward mouse
    currentTransform.x = mouseX - (mouseX - currentTransform.x) * scaleFactor;
    currentTransform.y = mouseY - (mouseY - currentTransform.y) * scaleFactor;
    
    currentTransform.scale = newScale;
    
    applyTransform();
    zoomLevel.textContent = `${Math.round(newScale * 10)}%`;

    // Update marker sizes after zoom
    updateMarkerSizes();
}

// Dragging functions
function startDrag(e) {
    if (isAnimating) return;
    if (e.button !== 0) return;
    isDragging = true;
    lastMousePosition = { x: e.clientX, y: e.clientY };
    document.getElementById('map-overlay').style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging || isAnimating) return;
    
    const dx = e.clientX - lastMousePosition.x;
    const dy = e.clientY - lastMousePosition.y;
    
    currentTransform.x += dx;
    currentTransform.y += dy;
    
    applyTransform();
    
    lastMousePosition = { x: e.clientX, y: e.clientY };
}

function endDrag() {
    isDragging = false;
    document.getElementById('map-overlay').style.cursor = 'grab';
}

// Apply current transform to SVG
function applyTransform() {
    const containers = document.querySelectorAll('.floor-container');
    containers.forEach(container => {
        const svgs = container.querySelectorAll('.floor-svg');
        svgs.forEach(svg => {
            if (svg) {
                svg.style.transform = `translate(${currentTransform.x}px, ${currentTransform.y}px) scale(${currentTransform.scale})`;
                svg.style.transformOrigin = '0 0';
            }
        });
    });
}

// Initialize the app
window.addEventListener('DOMContentLoaded', init);