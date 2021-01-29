import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

export class StepperComponent extends React.Component {

    componentDidMount() {
        console.log(this.props.children)
    }

    render() {
        return (
            <div className={"stepper-container"}>
                {this.props.children.map((child, key) => {
                        return (
                            <div>
                                <DonutLargeIcon key={key}/>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}
