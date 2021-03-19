import React, {Component} from 'react'

export default class GifSearch extends Component {
    state ={
        searchText: ""
    }

    handleChange = (e) => {
        this.setState({searchText:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getSearchValue(this.state.searchText)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Enter Search Term
                <input name="searchText" type="text" 
                onChange={this.handleChange}
                />
              </label>
            </div>
            <div>
              <button type="submit" >Get that Gif</button>
            </div>
          </form>
        )
    }
}