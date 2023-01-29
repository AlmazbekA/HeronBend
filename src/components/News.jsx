import React, { useEffect, useState } from "react";
import NewsDataService from "./services/news.services";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async() => {
    const data = await NewsDataService.getAllNews();
    console.log(data.docs);
    setNews(data.docs.map((doc) => ({ ...doc.data(), id:doc.id})))
  }
  return (
    <>
    <div>
      <div class="page-container">
        <div class="copy-left copy">
          <h1>Community Announcements</h1>
              <div class="inner-left2">
                <p>For the latest Walnut Country news, scroll through the following articles listed in reverse chronological order (newest to oldest). If you would like a weekly email digest of stories, join our eSignal mailing list using the form at the far bottom right of this page.</p>
              </div>
          {news.map((doc, index) => {
            return (
              <>
              <div class="news-section">
                  <div>
                    <h2>{doc.title}</h2>
                    <p>{doc.content}</p>
                    <button><a href={doc.link}>View</a></button>
                  </div>
              </div>
                </>
            )
          })}
        </div>
        <div class="copy-right copy">
          <div class="right-menu">
            <h2>RESIDENT MENU</h2>
            <li>Pay HOA Assessments</li>
            <li>Clubhouse Reservations</li>
            <li>Agendas & Minutes</li>
            <li>Governing Documents</li>
            <li>USTA Teams & Schedule</li>
          </div>
          <div class="right-menu2">
            <h2>RECENT NEWS</h2>
            <li>RSVP for the CHOA Winter</li>
            <li>Concord Turkey Trot 5k Walk/Run</li>
            <li>Main Pool Heating Schedule</li>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default News;
