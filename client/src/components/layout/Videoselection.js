import React from 'react'
import 'reactjs-popup/dist/index.css';
import Videomodal from './Videomodal';
import Clouds from '../../img/meditateimgs/clouds.png';


class Videoselection extends React.Component {
// export const Videoselection = (props) => {
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
        <li className="col-span-1 flex flex-col text-center bg-white rounded-lg">
            {/* <div  onClick={() => {alert("Hello from here")}}> */}
            <div id="1" onClick={e => {
                this.showModal(e.target.id);
            }}>


            <div id="{this.props.id}" className="flex-1 flex flex-col p-8 bg-beaLightBlue rounded-lg h-40">
                <img src={this.props.img}  alt={this.props.imgalt} />
            </div>
            <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex relative -mr-px w-0 flex-1 inline-flex items-center justify-start py-4 text-sm text-gray-700 font-medium border-none border-transparent rounded-bl-lg hover:text-gray-500">
                    <button type="button" className="relative inline-flex items-center px-3 transition-all py-3 border border-transparent text-sm font-medium border border-beaDarkPurple rounded-full text-beaDarkPurple group-hover:bg-beaDarkPurple group-hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 210 210">
                        <path d="M179.07,105L30.93,210V0L179.07,105z"/>
                    </svg>            
                    </button> 
                    <div className="flex flex-col ml-3">
                        <span className="text-left">{this.props.title}</span>
                        <span className="text-left">{this.props.length}</span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <Videomodal onClose={this.showModal} show={this.state.show} title={this.props.title} length={this.props.length} vidurl={this.props.vidurl}/>
        </li>
    )}
}


export default Videoselection;