const https=require("https");
const url="https://www.skku.edu/skku/campus/skk_comm/notice01.do";
const header = {
   headers: {
       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
   }
}
https.get(url, header, (res) => {
        let data =""
        res.on("data",(chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            const root = parser.parse(data)
            const list = root.querySelectorAll(".board-list-content-title > a")
            list.forEach((item) => {
                console.log(i+". "+item.innerText.trim()+"\n")
                i++
            })
        });
    });
