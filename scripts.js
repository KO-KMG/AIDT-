function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle("hidden");
}

function showManage(type) {
    const content = document.getElementById('content');
    if (type === '학생별 관리') {
        content.innerHTML = `
            <h2>학생별 관리</h2>
            <div class="manage">
                <div>
                    <label><input type="radio" name="examType" value="진단평가"> 진단평가</label>
                    <label><input type="radio" name="examType" value="형성평가"> 형성평가</label>
                    <label><input type="radio" name="examType" value="총괄평가"> 총괄평가</label>
                </div>
                <input type="text" placeholder="학생 검색..." style="width: 100%; padding: 5px; margin: 10px 0;">
                <div class="student-list">
                    <ul>
                        ${generateStudents()}
                    </ul>
                </div>
            </div>
        `;
    }
}

function generateStudents() {
    const students = [];
    for (let i = 1; i <= 10; i++) {
        const score = Math.floor(Math.random() * 21) + 50; // 50 ~ 70
        students.push(`
            <li>
                학생${i} (점수: ${score}점)
                <button>평가지 확인</button>
                <button>평가 결과 확인</button>
            </li>
        `);
    }
    return students.join('');
}