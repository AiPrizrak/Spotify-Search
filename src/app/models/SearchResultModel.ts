export class SearchResultModel{
    track_name = '';
    track_url = '';
    img_url = '';
    album = '';
    artists = '';
    constructor(
        name:string,
        url:string,
        img:string,
        album:string,
        artists:string[],
    ){
        this.track_name = name;
        this.track_url = url;
        this.img_url = img;
        this.album = album;
        this.artists = artists.reduce((acc, artist)=>acc+=(', '+artist));
    }
}