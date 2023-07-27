// Youtube variables

// String variables
let first_name = "Irvin",
    last_name = "Zavala",
    username = "EduardoZaRo",
    channel_name = "Eduardo Gameplays",
    country = "Mexico",
    logo_url = "https://pointerpointer.com",
    language = "Espanol";
// Numerical variables
let user_age = 21,
    number_of_uploaded_videos = 4,
    suscribers_qty = 100000,
    total_views = 501320030000,
    total_likes = 4440000,
    total_dislikes = 123012300303;

// Boolean variables
let activePremiumSucription = false,
    activeYTMusicSucription = false,
    isPartner = true,
    restrictedMode = false,
    get_notifications = true,
    always_show_subtitles = false,
    dark_theme = true;
document.write(`
    <p>Selected application: Youtube</p>
    <ol>
        <li><strong>first_name</strong>: ${first_name}</li>
        <li><strong>last_name</strong>: ${last_name}</li>
        <li><strong>username</strong>: ${username}</li>
        <li><strong>channel_name</strong>: ${channel_name}</li>
        <li><strong>country</strong>: ${country}</li>
        <li><strong>logo_url</strong>: ${logo_url}</li>
        <li><strong>language</strong>: ${language}</li>


        <li><strong>user_age</strong>: ${user_age}</li>
        <li><strong>number_of_uploaded_videos</strong>: ${number_of_uploaded_videos}</li>
        <li><strong>suscribers_qty</strong>: ${suscribers_qty}</li>
        <li><strong>total_views</strong>: ${total_views}</li>
        <li><strong>total_likes</strong>: ${total_likes}</li>
        <li><strong>total_dislikes</strong>: ${total_dislikes}</li>


        <li><strong>activePremiumSucription</strong>: ${activePremiumSucription}</li>
        <li><strong>activeYTMusicSucription</strong>: ${activeYTMusicSucription}</li>
        <li><strong>isPartner</strong>: ${isPartner}</li>
        <li><strong>restrictedMode</strong>: ${restrictedMode}</li>
        <li><strong>get_notifications</strong>: ${get_notifications}</li>
        <li><strong>always_show_subtitles</strong>: ${always_show_subtitles}</li>
        <li><strong>dark_theme</strong>: ${dark_theme}</li>
    </ol>
`);