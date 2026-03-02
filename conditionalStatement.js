/** Assignment Details:  
Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and 
`runTests` with `switch` for test type messages. 
 
Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript */

function launchBrowser(browserName)
{
    if (browserName == "chrome")
    {
        console.log("Chrome browser launched successfully.");
    }
    else
    {
        console.log("Other browser launched.");
    }
}   

function runTests(testType)
{
    switch(testType)
    {
        case "smoke":
            console.log("Running smoke tests.");
            break;
        case "sanity":
            console.log("Running sanity tests.");
            break;
        case "regression":
            console.log("Running regression tests.");
            break;
        default:
            console.log("Running smoke tests (default).");
    }
}

launchBrowser("chrome");
launchBrowser("firefox");
runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("performance");