import {RESTDataSource} from '@apollo/datasource-rest'



export class TypicodeAPI extends RESTDataSource {
  override baseURL = 'https://jsonplaceholder.typicode.com';

  async getComments() {
    const data = await this.get<Comment[]>('/comments', {
      params: {
        _limit: "20",
        _offset: "0"
      }
    })
    
    return data
  }
}