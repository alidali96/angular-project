import { Content } from '../helper-files/content-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[];
  
  constructor() { }

  searchContent(search:String):void{
    let exist = this.contentList.find(content => content.title.toLowerCase() == search.toLowerCase());
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }

  addContentToList(newContentFromChild: Content): void {
    this.contentList.push(newContentFromChild);
    console.log("PUSHED " + this.contentList.length);
    console.log("PUSHED " + newContentFromChild.title);
    // We need to clone the array for the pipe to work
    this.contentList = Object.assign([], this.contentList);
  }

  ngOnInit(): void {
    this.contentList = [
      {
        id: 1,
        author: 'Ali Dali',
        title: 'St. Clair College student finds success after treacherous journey to Windsor',
        body: 'The Mobile Applications Development program at St. Clair College is proving to be a launching pad to success for a student who has had his fair share of life-altering challenges.        Ali Dali, a Syrian refugee who has made a new home in Windsor, has returned to class — being held online because of the COVID-19 pandemic — and is finding success as a programmer that only years earlier seemed out of the question.',
        imgUrl: 'https://www.ctvnews.ca/polopoly_fs/1.5134518.1601997054!/httpImage/image.jpeg_gen/derivatives/landscape_960/image.jpeg',
        tags: ['Windsor', 'Student', 'St. Clair'],
        type: 'news'
      },
      {
        id: 2,
        author: 'Gabby Rodrigues',
        title:'Woman critically injured after being hit by car in Scarborough',
        body: 'Emergency crews were called to Brimley Road and St. Clair Avenue East at around 6 a.m. for reports that a pedestrian had been struck by a vehicle. The woman was taken to hospital by paramedics in life-threatening condition. Police said the driver remained on scene. The investigation is still ongoing as investigators determine how the collision happened. St. Clair Avenue East is closed in both directions from Brimley Road to Fermoy Road.',
        imgUrl: 'https://globalnews.ca/wp-content/uploads/2020/09/st-clair-ped-struck.jpg',
        tags: ['Windsor', 'Cars', 'St. Clair'],
        type: 'news'
      },
      {
        id: 3,
        author: 'Gabby Rodrigues',
        title:'Hydro crews restore power after 2 outages in Toronto',
        body: 'The hydro company said the boundaries for the first area were from St. Clair Avenue West south to The Queensway and from Jane Street east to Dufferin Street. The second area was a smaller pocket from St. Clair Avenue West south to Dupont Street and Dovercourt Road east to Bathurst Street. The outage affected roughly 10,000 customers in total.',
        imgUrl: 'https://globalnews.ca/wp-content/uploads/2014/08/01152006.jpg',
        tags: ['Windsor'],
        type: 'news'
      },
      {
        id: 4,
        author: 'Ryan Rocca',
        title:'Man dead after targeted daylight shooting in Toronto: police',
        body: 'Police said they received reports of gunshots near St. Clarens Avenue and St. Clair Avenue West, west of Dufferin Street, at 11:40 a.m. Duty Insp. Stacey Davis said a man was shot in a vehicle in the area and pronounced dead at the scene. Davis said a gunman was seated in the passenger seat of a vehicle on a nearby side street, waiting for the victim to appear.',
        tags: ['Toronto'],
        type: 'news'
      },
      {
        id: 5,
        author: 'Gabby Rodrigues',
        title:'84-year-old man dies in hospital after being hit by SUV in midtown Toronto',
        body: 'Police say the 84-year-old man was crossing St. Clair Avenue West from the north curb to the south when he was struck by a blue SUV. According to police, the unidentified driver of the vehicle allegedly slowed down for a moment but then continued driving westbound and was last seen near Keele Street.',
        // imgUrl: 'https://globalnews.ca/wp-content/uploads/2018/04/img_1177.jpg',
        tags: ['Police', 'Toronto', 'St. Clair'],
        type: 'action'
      },
      {
        id: 6,
        author: 'Ryan Rocca',
        title:'Driver allegedly pulls gun on people who asked him to slow down, Toronto police say',
        body: 'Toronto police are hoping the public will be able to assist in identifying a suspect after a driver allegedly pulled a gun on a man and a woman after they asked him to slow down. Police said they received a call at around 4 p.m. on Thursday for reports of a person with a gun in the area of Yonge Street and St. Clair Avenue.',
        imgUrl: 'https://globalnews.ca/wp-content/uploads/2019/06/suspectvehicle1.png',
        tags: ['Police', 'Toronto', 'St. Clair'],
        type: 'action'
      },
    ];
  }

}
