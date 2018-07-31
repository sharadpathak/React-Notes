import React, { Component } from 'react';

class CaptureForm extends Component {
    
    constructor(props) {
        super(props);
        this.state =  {
            idea : "",
            description : ""
          };

          this.handleInputChange = this.handleInputChange.bind(this);
          this.captureCreateIdea = this.captureCreateIdea.bind(this);
    }


    componentWillReceiveProps =(newProps) => {
          console.log('as1d11',newProps);
          if(newProps.item){
              let {idea,description} = newProps.item;
              this.setState({idea,description});
          }
    }

    

    captureCreateIdea = (event) => {
        event.preventDefault()
        if (this.state.idea && this.state.description){
            this.props.captureCreateIdea(this.state);
        } else {
            alert("No Idea What are you doing there.");
        }
    }
    handleInputChange(event) {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    render() { 
        return ( 
            <div>
                <h3>Capture <b>IDEA</b></h3>
                <div className="row">                    
                    <div className="col-md-8">                    
                        <form onSubmit={this.captureCreateIdea}>
                            <div className="form-group">
                                <label>Idea:</label>
                                <input type="text"  name="idea" 
                                value={this.state.idea}
                                onChange={event => this.handleInputChange(event)}
                                className="form-control" id="ideaName" placeholder="Idea"/>
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea className="form-control" name="description" 
                                 value={this.state.description}
                                 onChange={event => this.handleInputChange(event)}
                                 id="description" placeholder="Support Your Idea" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>                   
                    </div>                    
                </div>
            </div>
         );
    };
}
 
export default CaptureForm;