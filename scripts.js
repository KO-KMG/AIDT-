document.addEventListener('DOMContentLoaded', () => {
    const studentList = document.getElementById('student-list');

    // Mock 20 students
    for (let i = 1; i <= 20; i++) {
        const li = document.createElement('li');
        const studentButton = document.createElement('button');
        studentButton.textContent = `학생 ${i}`;
        studentButton.onclick = () => assignToStudent(`학생 ${i}`);
        li.appendChild(studentButton);
        studentList.appendChild(li);
    }
});

function showTab(tab) {
    document.getElementById('create').style.display = tab === 'create' ? 'block' : 'none';
    document.getElementById('manage').style.display = tab === 'manage' ? 'block' : 'none';
}

function selectType(type) {
    alert(`${type} 유형이 선택되었습니다.`);
}

function assignToStudent(student) {
    alert(`${student}에게 평가가 출제되었습니다.`);
}

function assignAll() {
    alert('전체 학생에게 평가가 출제되었습니다.');
}
