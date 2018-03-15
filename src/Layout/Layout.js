import React, {Component} from 'react';
import Aux from '../hoc/Auxillary/Auxillary'
import StudyRegistration from './StudyRegistration/StudyRegistration'

class Layout extends Component {
    state = {
        inVal: ''
    }

    render() {
        return (
            <Aux>
                <div>Home, Study Registration, Reports, Contact Us</div>
                <StudyRegistration />                
            </Aux>
        )
    }
}

export default Layout;