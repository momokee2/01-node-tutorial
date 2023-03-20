const {readFile, writeFile} = require('fs').promises;

const start = async() => {
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile(
            './content/result-mind-grenade.txt', 
            `Thank you so much ${first} and ${second}`,
            {flag: 'a'}
            )
    }catch(err){
        console.log(err);
    }

}

start()