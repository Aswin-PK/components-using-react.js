import { useContext } from 'react'
import { FeatureFlagsContext } from './Context'
import './styles.css'

import Accordion from '../Accordion'
import RandomColor from '../RandomColorGenerator'
import ThemeChanger from '../ThemeChange'
import GitHubProfileFinder from '../GitHubProfileFinder'
import TicTacToe from '../TicTacToe'

export default function FeatureFlags() {

    const {loading, enabledFlags} = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component:  <ThemeChanger />
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component:  <RandomColor />
        },
        {
            key: 'showAccordian',
            component:  <Accordion />
        },
        {
            key: 'showGithubUserFinder',
            component:  <GitHubProfileFinder />
        }
    ];

    const checkEnabledFlags = (getCurrentComponentKey) => {
        return enabledFlags[getCurrentComponentKey]
    }

    if(loading) return <div className="loading">Loading Data...Please wait</div>

    return <div className="feature-flag-container">
        {
            componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
        }
    </div>
}