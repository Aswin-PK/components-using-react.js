import Tabs from "."

const Projects = () => {
    return <ul style={{padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <li>Smart Interview Manager</li>
        <li>Blood Bank Management System</li>
        <li>Airbnb Clone</li>
        <li>Netflix Clone</li>
    </ul>
}

const Contacts = () => {
    return <ul style={{padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">GitHub</a></li>
        <li><a href="#">Twitter</a></li>
    </ul>
}

export default function TabsTest() {
    const tabs = [
        {
            label: 'About',
            content: "I'm Aswin P K, an MCA final year student at Kristu Jayanti College. I bring design to life with clean and efficient code."
        },
        {
            label: 'Projects',
            content: <Projects />
        },
        {
            label: 'Contacts',
            content: <Contacts />
        }
    ];

    const handleIndexChange = (currentTabIndex) => {
        console.log('currentTabIndex', currentTabIndex)
    }

    return <Tabs tabsDetails={tabs} onChange={handleIndexChange} />;
}