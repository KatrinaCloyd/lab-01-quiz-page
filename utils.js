export function countsAsYes(answer) {
    return answer.charAt(0).toUpperCase() === 'Y';
}

export function percentage(correctAnswers, total) {
    return ((correctAnswers / total) * 100).toFixed(0);
}
