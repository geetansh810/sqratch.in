import homePageData from "@/dummyData/homepageData.json"
import works from "@/dummyData/workData.json"
import posts from "@/dummyData/postData.json"
import post from "@/dummyData/singlePostData.json"
import work from "@/dummyData/singleWorkData.json"
import about from "@/dummyData/aboutData.json"
import competitions from "@/dummyData/competitionData.json"
import competition from "@/dummyData/singleCompetitionData.json"
import news from "@/dummyData/newsData.json"
import contact from "@/dummyData/contactData.json"
import footer from "@/dummyData/footerData.json"
import header from "@/dummyData/headerData.json"

export function getData(page:string){
    switch (page) {
        case "homepage":
            return homePageData;
        case "works":
            return works;
        case "posts":
            return posts;
        case "work":
            return work;
        case "post":
            return post;      
        case "about":
            return about;      
        case "competitions":
            return competitions;      
        case "news":
            return news;      
        case "contact":
            return contact;      
        case "competition":
            return competition;   
        case "footer":
            return footer;       
        case "header":
            return header;       
        default:
            return {}
    }
}