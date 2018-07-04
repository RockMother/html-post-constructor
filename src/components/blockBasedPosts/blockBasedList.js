import React, { Component } from 'react'

import BlockContainer from './../block/BlockContainer';
import { bindToThis } from '../../utils/utils';

export default class BlockBasedList extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(props);
        bindToThis(this, this.deleteClicked, 
            this.saveClicked, 
            this.convertToBlockModel, 
            this.convertToModel);
    }

    deleteClicked(id) {
        this.props.delete(id);
    }

    saveClicked(originalModel, blockModel, template) {
        this.props.save(this.convertToModel(blockModel, originalModel, template));
    }

    componentWillReceiveProps(newProps) {
        this.setState(this.getInitialState(newProps))
    }

    render() {
        const { newEntity } = this.state;
        return (
            <div className="list">
                {
                    this.props.showNew &&
                    <BlockContainer key="new"
                        model={this.convertToBlockModel(newEntity)}
                        saveClicked={this.saveClicked.bind(this, newEntity)}
                        templates={this.props.templates}
                        template={this.props.newEntityTemplate}
                        hideDeleteButton={true} />
                }
                {
                    this.props.data.length > 0 && this.props.data.map(entity => <BlockContainer key={entity._id}
                        model={this.convertToBlockModel(entity)}
                        template={entity.template}
                        templates={this.props.templates}
                        deleteClicked={this.deleteClicked.bind(this, entity._id)}
                        saveClicked={this.saveClicked.bind(this, entity)}
                    />)
                }
            </div>
        );
    }

    convertToBlockModel() {
        throw new Error('Method not implmented');
    }

    convertToModel(blockModel, originalModel, template) {
        throw new Error('Method not implmented');
    }

    getInitialState(props) {
        throw new Error('Method not implmented');
    }
}