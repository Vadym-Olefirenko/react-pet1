import React, {Component} from 'react';
import './app.css'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

export default class App extends Component {
     constructor (props) {
          super(props);
          this.state = {
               data: [
                    {label: "This is first post!", important: false, like: false, id: 1},
                    {label: "Need somebody!", important: false, like: false, id: 2},
                    {label: "August is the month of hopes!", important: false, like: false, id: 3},
               ],
               term: '',
               filter: 'all'
          }

          this.maxId = 4;
     }

     deletePost = id => {
          this.setState(({data}) => {
               const index = data.findIndex(el => el.id === id);
               
               const newData = [...data.slice(0, index), ...data.slice(index + 1)];

               return {
                    data: newData
               }
          })
     }

     addPost = text => {
         const newPost = {
              label: text,
              important: false,
              like: false,
              id: this.maxId++
         }

         this.setState(({data}) => {
              if (newPost.label.length !== 0) {
               const newData = [...data, newPost];
               return {
                    data: newData
               }
              }
         })

     }

     onToggleImportant = id => {
          this.setState(({data}) => {
               const index = data.findIndex(el => el.id === id);
               const indexBox = data[index];
     
               const newItem = {...indexBox, important: !indexBox.important};
     
               const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
     
               return {
                    data: newArr
               }

          })
     }

     onToggleLiked = id => {

          this.setState(({data}) => {
               const index = data.findIndex(el => el.id === id);
               const indexBox = data[index];
               const newItem = {...indexBox, like: !indexBox.like};

               const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

               return {
                    data: newArr
               }

          })

     }

     serchPost = (data, term) => {
          if (term.length === 0) {
               return data
          }

         return data.filter((el) => {
               return el.label.indexOf(term) > -1;
          })
     }

     updateSearch = term => {
          this.setState({term})
     }

     filterPosts = (data, filter) => {
          if (filter === 'like') {
               return data.filter(el => el.like);
          } else {
               return data;
          }
     }

     onFilterSelect = (filter) => {
          this.setState({filter})
     }

     render () {

          const {data, term, filter} = this.state;


          let clearData = this.state.data.filter((el) => {
               
               if (el.label) {
                    return el;
               }

          });

          const liked = data.filter(el => el.like).length,
               allPostsVal = clearData.length;

          const allData = this.filterPosts(this.serchPost(clearData, term), filter);
          return  (
               <div className="app">
                  <AppHeader
                    liked={liked}
                    allPosts={allPostsVal}
                  />
                  <div className="serch-panel d-flex">
                       <SearchPanel
                         updateSearch={this.updateSearch}
                       />
                       <PostStatusFilter
                         filter={filter}
                         onFilterSelect={this.onFilterSelect}
                       />
                  </div>
                  <PostList 
                     posts={allData}
                     onDelete={this.deletePost}
                     onToggleLiked={this.onToggleLiked}
                     onToggleImportant={this.onToggleImportant}
                  />
                  <PostAddForm 
                    addPost = {this.addPost}
                  />
               </div>
           )
     }
    

    
}
