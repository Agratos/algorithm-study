const { exec } = require('child_process');


const str = `mkdir "${RESULT_PATH}"`;

exec(str, (error, stdout, stderr) => {
    if (error) {
        console.error(`폴더 생성 중 오류 발생: ${error.message}`);
        console.log(`표준 출력: ${stdout}`);
        console.error(`표준 에러: ${stderr}`);
        return;
    }

    console.log(`폴더가 성공적으로 생성되었습니다.`);
});