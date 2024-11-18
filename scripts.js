function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle("hidden");
}

function showCreate(type) {
    document.getElementById('content').innerHTML = `
        <div class="create">
            <h2>${type}</h2>
            <p>문제들을 추가합니다.</p>
        </div>
        <button>문제 만들기</button>
    `;
}

function showManage(mode) {
    if (mode === '반별 관리') {
        document.getElementById('content').innerHTML = `
        <div class="manage">
            <p>체크박스: 반 1 ~ 8 추가됩니다.</p>
        </div>
        `;
    } else {
        // 다른 내용 추가
    }
}
