export class httpreq {

    public static async get(path: string): Promise<any> {
        return new Promise((resolve) => {
            var r = new XMLHttpRequest();
            r.open('GET', path, true);
            r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return;
                resolve(JSON.parse(r.responseText));
            };
            r.send();
        })
    }

}