import { json } from 'node:stream/consumers';
import React, { Component } from 'react';
import {Container} from 'reactstrap';
import '../App.css';

const APIURL : string = "https://localhost:44314/api/Blog";

interface BlogProps
{
    URL : string;
}

interface BlogCtxt
{
    isLoaded : boolean;
    itemResponce : BlogItem[];
    error : any;
}

class BlogItem{
    public Content : string;
    public Title : string;
    public Date : string;
    public Author : string;

    constructor(props : any){
        this.Content = props.content;
        this.Title = props.title ;
        this.Date = props.date;
        this.Author = props.author;
    }
}

class Blog extends Component<BlogProps,BlogCtxt, any> 
{

    constructor(props : BlogProps){
        super(props);
        var ctx : BlogCtxt = {isLoaded: false, error: null, itemResponce: []};
        this.state = ctx;
    }
    
    componentDidMount() {

        var arr : Array<any> = new Array<any>();
        var reqHeader : RequestInit = {
            method: 'GET',
            headers: {
                'content-type': 'text/json',
            },
            mode:'cors'
        }
        fetch(`${APIURL}`, reqHeader)
        .then(res => 
            {
                console.log(res);
                return res.json();
            })
        .then(
          (result) => {
            console.log(result);

            arr = result.data;
            this.setState({
                isLoaded: true,
                itemResponce: arr.map(i => new BlogItem(i))
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            console.log(error);
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        )
    }

    render() {
        const {isLoaded, itemResponce, error} = this.state;
        
        const LoadingState = 
        (
            <Container>
                Loading . . .
            </Container>
        );

        const blog = itemResponce.map(i => 
        (
            <Container>
                <h1>
                    {i.Title}
                </h1>
                <p>
                    {i.Content}
                </p>
                <i>
                    <a href = "#">
                        {i.Author}
                    </a>
                    <br/>
                </i>
                <i>
                    {i.Date}
                </i>
            </Container>
        ));

        const responce = (isLoaded) ?  blog : LoadingState;

        return (
            <div>
                {responce}
            </div>
        );
    }
}

export default Blog;