var restify = require('restify');
var builder = require('botbuilder');
var inMemoryStorage = new builder.MemoryBotStorage();

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 4390,
function () {
    console.log('%s listening to %s', server.name, server.url);
});

// chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: "da419137-91b4-4d3e-b028-9b9df7dab8bc",
    appPassword: "qlsdMQCYAH380$?fjcK27!$"
});

    // Listen for messages from users
    server.post('/botframework/receive', connector.listen());

    var bot = new builder.UniversalBot(connector, function (session) {
        session.send("Welcome");
    });

    //button demo
    bot.dialog('suggestion',function(session) {
        var msg = new builder.Message(session)
    	.text("Thank you for expressing interest in our premium golf shirt! What color of shirt would you like?")
    	.suggestedActions(
    		builder.SuggestedActions.create(
    				session, [
    					builder.CardAction.imBack(session, "productId=1&color=green", "Green"),
    					builder.CardAction.imBack(session, "productId=1&color=blue", "Blue"),
    					builder.CardAction.imBack(session, "productId=1&color=red", "Red")
    				]
    			));
        session.send(msg);
    }).triggerAction({ matches: /^(suggestion)/i });
    //button demo ends

    //Hero card demo
    bot.dialog('HeroCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title("Classic White T-Shirt")
                .subtitle("100% Soft and Luxurious Cotton")
                .text("Price is $25 and carried in sizes (S, M, L, and XL)")
                .images([builder.CardImage.create(session, 'http://petersapparel.parseapp.com/img/whiteshirt.png')])
                .buttons([
                    builder.CardAction.imBack(session, "buy classic white t-shirt", "Buy")
                ])
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(hero)/i });
    // hero card demo ends //

    //ThumbnailCard demo
    bot.dialog('ThumbnailCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.ThumbnailCard(session)
                .title('BotFramework Thumbnail Card')
                .subtitle('Your bots — wherever your users are talking')
                .text('Build and connect intelligent bots to interact with your users naturally wherever they are, from text/sms to Skype, Slack, Office 365 mail and other popular services.')
                .images([
                    builder.CardImage.create(session, 'https://sec.ch9.ms/ch9/7ff5/e07cfef0-aa3b-40bb-9baa-7c9ef8ff7ff5/buildreactionbotframework_960.jpg')
                ])
                .buttons([
                    builder.CardAction.openUrl(session, 'https://docs.microsoft.com/bot-framework/', 'Get Started')
                ])
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(ThumbnailCard)/i });

    //ThumbnailCard ends Here
    //Receipt Card
    bot.dialog('ReceiptCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.ReceiptCard(session)
                .title('John Doe')
                .facts([
                    builder.Fact.create(session, order++, 'Order Number'),
                    builder.Fact.create(session, 'VISA 5555-****', 'Payment Method')
                ])
                .items([
                    builder.ReceiptItem.create(session, '$ 38.45', 'Data Transfer')
                        .quantity(368)
                        .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/traffic-manager.png')),
                    builder.ReceiptItem.create(session, '$ 45.00', 'App Service')
                        .quantity(720)
                        .image(builder.CardImage.create(session, 'https://github.com/amido/azure-vector-icons/raw/master/renders/cloud-service.png'))
                ])
                .tax('$ 7.50')
                .total('$ 90.95')
                .buttons([
                    builder.CardAction.openUrl(session, 'https://azure.microsoft.com/en-us/pricing/', 'More Information')
                        .image('https://raw.githubusercontent.com/amido/azure-vector-icons/master/renders/microsoft-azure.png')
                ])
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(ReceiptCard)/i });
    //ReceiptCard ends

    //AudioCard
    bot.dialog('AudioCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.AudioCard(session)
                .title('I am your father')
                .subtitle('Star Wars: Episode V - The Empire Strikes Back')
                .text('The Empire Strikes Back (also known as Star Wars: Episode V – The Empire Strikes Back) is a 1980 American epic space opera film directed by Irvin Kershner. Leigh Brackett and Lawrence Kasdan wrote the screenplay, with George Lucas writing the film\'s story and serving as executive producer. The second installment in the original Star Wars trilogy, it was produced by Gary Kurtz for Lucasfilm Ltd. and stars Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew and Frank Oz.')
                .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'))
                .media([
                    { url: 'http://www.wavlist.com/movies/004/father.wav' }
                ])
                .buttons([
                    builder.CardAction.openUrl(session, 'https://en.wikipedia.org/wiki/The_Empire_Strikes_Back', 'Read More')
                ])
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(AudioCard)/i });
    //AudioCard

    //VideoCard
    bot.dialog('VideoCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.VideoCard(session)
                .title('Big Buck Bunny')
                .subtitle('by the Blender Institute')
                .text('Big Buck Bunny (code-named Peach) is a short computer-animated comedy film by the Blender Institute, part of the Blender Foundation. Like the foundation\'s previous film Elephants Dream, the film was made using Blender, a free software application for animation made by the same foundation. It was released as an open-source film under Creative Commons License Attribution 3.0.')
                .image(builder.CardImage.create(session, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/220px-Big_buck_bunny_poster_big.jpg'))
                .media([
                    { url: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }
                ])
                .buttons([
                    builder.CardAction.openUrl(session, 'https://peach.blender.org/', 'Learn More')
                ])
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(VideoCard)/i });
    //VideoCard

    //Signin Card
    bot.dialog('SigninCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.SigninCard(session)
                .text('BotFramework Sign-in Card')
                .button('Sign-in', 'https://login.microsoftonline.com')
        ]);
        session.send(msg).endDialog();
    }).triggerAction({ matches: /^(SigninCard)/i });


    bot.dialog('AnimationCard', function (session) {
        var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.AnimationCard(session)
                .title('Microsoft Bot Framework')
                .subtitle('Animation Card')
                .image(builder.CardImage.create(session, 'https://docs.microsoft.com/en-us/bot-framework/media/how-it-works/architecture-resize.png'))
                .media([
                    { url: 'http://i.giphy.com/Ki55RUbOV5njy.gif' }
                ])
        ]);
        session.send(msg).endDialog();
        }).triggerAction({ matches: /^(AnimationCard)/i });

