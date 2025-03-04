function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.classList.toggle("hidden");
}

function showAssignment(type) {
    const content = document.getElementById('content');
    if (type === '과제 관리') {
        content.innerHTML = `
            <h2>과제 관리</h2>
            <div class="Assignment">
                <div class="radio-buttons-1">
                    <label class="radio-button">
                        <input type="radio" name="examType" value="개별 과제">
                        <span class="custom-radio"></span> 개별 과제
                    </label>
                    <label class="radio-button">
                        <input type="radio" name="examType" value="자기주도학습">
                        <span class="custom-radio"></span> 자기주도학습
                    </label>
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
                <button>과제 확인</button>
                <button>과제 결과 확인</button>
            </li>
        `);
    }
    return students.join('');
}
