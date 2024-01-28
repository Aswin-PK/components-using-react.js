const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRandomColorGenerator: false,
    showAccordian: false,
    showGithubUserFinder: true
}

export default function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Something went wrong! Please try again later..");
    });
}