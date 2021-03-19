import React, {Component} from 'react'
import GiftSearch from '../components/GifSearch'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URL = "https://api.giphy.com/v1/gifs/search?q="
const api_key = "&api_key=dc6zaTOxFJmzC&rating=g"

export default class GifListContainer extends Component {
    state={
        gifs:[],
        searchTerm:"dog"
    }

    getSearchValue = (searchText) => {

        // this.setState({searchTerm: searchText})
        console.log(searchText)
        this.fetchGif(searchText)
    }


    componentDidMount(){
        this.fetchGif()
    }

    fetchGif = (searchTerm ='dog') => {
        const fetchURL = URL+`${searchTerm}`+"&limit=3"+api_key
        fetch(fetchURL).then(res=>res.json()).then((gifsResponse) => this.setState({gifs: gifsResponse.data}))
    }


    render(){
        return(
            <div>
                <GifSearch getSearchValue={this.getSearchValue}/>
                {this.state.gifs.map(gif=> <GifList gifUrl={gif.images.original.url}/>)}
            </div>
        )
    }
}