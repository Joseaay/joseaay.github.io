import React from "react";
import "./tabs.scss";
import { TabComponent } from "../Tab/Tab";

export class TabsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
            tabs: 65,
            tabPage: 0
        };
    }

    prevPage = () =>
        this.setState(prevState => ({
            tabPage:
                prevState.tabPage < 0
                    ? prevState.tabPage + 1000
                    : prevState.tabPage
        }));

    nextPage = () =>
        this.setState(prevState => ({
            tabPage:
                Math.abs(prevState.tabPage) <
                Math.floor(prevState.tabs / 10) * 1000
                    ? prevState.tabPage - 1000
                    : prevState.tabPage
        }));

    selectTab = i => this.setState({ selected: i });

    render() {
        return (
            <div className="tabs">
                <div
                    className="tabs__arrow tabs__arrow--left"
                    onClick={this.prevPage}
                >{`<-`}</div>
                {[...Array(this.state.tabs).keys()].map((e, i) => (
                    <TabComponent
                        i={i + 1}
                        selected={this.state.selected}
                        onClick={this.selectTab}
                        style={{
                            transform: `translateX(${this.state.tabPage}%)`
                        }}
                    />
                ))}
                <div
                    className="tabs__arrow tabs__arrow--right"
                    onClick={this.nextPage}
                >{`->`}</div>
            </div>
        );
    }
}
