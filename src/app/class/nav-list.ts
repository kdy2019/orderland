export class NavList {
    display: string;
    link: string;
    data: Params;

    constructor(display: string, link: string, data?: Params) {
        this.display = display;
        this.link = link;
        this.data = data;
    }
}

export class Params {
    queryParams: object;
}
