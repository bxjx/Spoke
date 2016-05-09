import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import { CampaignList } from '../components/campaign_list'
import { CampaignForm } from '../components/campaign_form'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import ContentAdd from 'material-ui/svg-icons/content/add'

const styles = {
  root: {
      width: '800px',
      margin: '24px auto',
      padding: '24px'

  }
}
export class CampaignEditPage extends Component {
  render() {
    const { campaigns } = this.props
    return (<div>
      <AppBar
        title="Create new campaign"
      />
      <Paper style={styles.root}>
        <CampaignForm />
      </Paper>
    </div>)
  }
}
