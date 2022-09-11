import Constants from "../Constants";

export default class APISports
{
  static API_KEY = Constants.API_KEY;
  static HOST = Constants.BASE_URL;

  async getFixtures(id_league, season, games) 
  {
    let url = `${APISports.HOST}/fixtures?league=${id_league}&season=${season}&next=${games}`;

    const response = await fetch(url, { 
      method: 'get', 
      headers: new Headers({
          'x-apisports-key': APISports.API_KEY
      })
    });

    const responseJSON = await response.json();

    return {
      resultFixtures: responseJSON.response,
    }
  }

  async getFixturesLive() 
  {
    let url = `${APISports.HOST}/fixtures?live=all`;

    
    const response = await fetch(url, { 
      method: 'get', 
      headers: new Headers({
          'x-apisports-key': APISports.API_KEY
      })
    });

    const responseJSON = await response.json();

    return {
      resultLive: responseJSON.response,
    }
  }

}