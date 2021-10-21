import React, { Fragment} from 'react'
import 'reactjs-popup/dist/index.css';
import Videomodal from './Videomodal';


class HeaderPlayButton extends React.Component {
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
      onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };

  render() {
    return (
        <Fragment>
                <div type="button" className="relative group text-white transition-all hover:bg-transparent hover:text-beaDarkPurple hover:border-beaDarkPurple inline-flex items-center px-6 py-2 border border-transparent shadow-none text-sm font-medium rounded-full bg-beaDarkPurple focus:outline-none"
                onClick={e => {
                    this.showModal(e.target.id);
                }}>
                        <svg className="w-3.5 mr-2" fill="currentColor" viewBox="0 0 24 24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 210 210">
                        <path d="M179.07,105L30.93,210V0L179.07,105z"/>
                        </svg>           
                        Play
                    </div>
           

            <Videomodal onClose={this.showModal} show={this.state.show} title={this.props.title} length={this.props.length} vidurl={this.props.vidurl}/>
            </Fragment>
    )}
}


export default HeaderPlayButton;