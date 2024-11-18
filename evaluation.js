function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle("hidden");
}

function showCreate(type) {
    document.getElementById('content').innerHTML = `
        <div class="create">
            <h2>${type}</h2>
            <p>문제 추가</p>
            <button>문제 만들기</button>
        </div>
    `;
}

function showManage(type) {
    const content = document.getElementById('content');
    if (type === '학생별 관리') {
        content.innerHTML = `
            <h2>학생별 관리</h2>
            <div>
                <label><input type="radio" name="examType" value="진단평가"> 진단평가</label>
                <label><input type="radio" name="examType" value="형성평가"> 형성평가</label>
                <label><input type="radio" name="examType" value="총괄평가"> 총괄평가</label>
            </div>
            <input type="text" placeholder="학생 검색...">
            <ul>
                <li>학생1 (점수: 55점) <button>평가지 확인</button><button>평가 결과 확인</button></li>
                <li>학생2 (점수: 60점)</li>
            </ul>
        `;
    }
}
