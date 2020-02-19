<template>
    <div>
        <b-container >

            <div class="d-flex flex-column justify-content-center mt-5">

                <b-row class="mt-5">
                    <b-col cols="12">

                    </b-col>
                </b-row>

                <b-row class="mt-5 text-left ">
                    <b-col cols="3">
                        
                        <b-navbar :sticky="sticky"  v-b-scrollspy:scrollspy-nested class="flex-column">
                        <b-navbar-brand href="#">Navbar</b-navbar-brand>
                        <b-nav  vertical>
                            <b-nav-item link-classes="link text-light" active-class="outline-light" exact-active-class="warning" href="#terms-of-use">Terms Of Use</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#privacy-policy">Privacy Policy</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#creator-terms">Creator Terms</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#supporter-terms">Supporter Terms</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#community-guidelines">Community Guidelines</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#cookies-policy">Cookie Policy</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#copyright-guidelines">Copyright Guidelines</b-nav-item>
                            <b-nav-item link-classes="link text-light" href="#copyright-policy">Copyright Policy</b-nav-item>
                            
                        </b-nav>
                        </b-navbar>

                    </b-col>

                    <b-col cols="9">

                        <div id="scrollspy-nested" class="text-light vh-100" style="position:relative; overflow-y:auto">


                            <div id="terms-of-use">	

                                    <h2>
                                        Terms of Use
                                    </h2>
                                    <p>
                                        Welcome to Trackd® (“Trackd”), a service provided by Trident Cloud® Limited (“Trident Cloud”, “we” “our”, or “us”).
                                    </p>
                                    <p>
                                        These Terms of Use govern your use of trackdmusic.com and tridentcloud.com (together, the “Websites”), our mobile and desktop apps (our "Apps") and all
                                        related players, widgets, tools, applications, data, software, APIs (which may also be subject to separate API Terms of Use) and other services provided by
                                        Trident Cloud (the “Services”).
                                    </p>
                                    <p>
                                        These Terms of Use, together with our Privacy Policy, Cookies Policy, Community Guidelines and any other terms specifically referred to in any of those
                                        documents, constitute a legally binding agreement (the “Agreement”) between you and Trident Cloud in relation to your use of the Website, Apps and Services
                                        (together, the “Platform”).
                                    </p>
                                    <p>
                                        These Terms of Use are divided into the following sections:
                                    </p>
                                    <p>
                                    • Acceptance of Terms of Use Basically, by using Trackd and Trident Cloud you accept our Terms of Use, <a href="#privacy-policy">Privacy Policy</a>, <a href="#cookies-policy">Cookies Policy</a> and <a href="#community-guidelines">Community Guidelines</a> and agree to abide by them.
                                    </p>
                                    <p>
                                        • Changes to Terms of Use This section explains that our Terms of Use may change from time to time.
                                    </p>
                                    <p>
                                        • Description of the Platform This provides a general description of the Platform, its features and functionality.
                                    </p>
                                    <p>
                                        • Your Trackd Account This section explains your responsibilities should you choose to register for a Trackd account.
                                    </p>
                                    <p>
                                        • Your Use of the Platform This section sets out your right to use the Platform, and the conditions that apply to your use of the Platform.
                                    </p>
                                    <p>
                                        • Your Content This section deals with ownership of your content, and includes your agreement not to record or upload anything that infringes on anyone
                                        else’s rights.
                                    </p>
                                    <p>
                                        • Grant of Licence This section explains how your content will be used and the permissions that you grant by recording or uploading your content - for
                                        example, the right for other users to listen to or collaborate on your songs.
                                    </p>
                                    <p>
                                        • Representations and Warranties This section includes important promises and guarantees that you give when recording and uploading content - in
                                        particular, your promise that everything you record, upload and share is owned by you and won’t infringe anyone else’s rights.
                                    </p>
                                    <p>
                                        • Liability for Content This section explains that the Platform is a recording and hosting service and that its users are solely liable for material that
                                        they record or upload to the Platform.
                                    </p>
                                    <p>
                                        • Reporting Infringements This section explains how to notify us of any content on that you believe infringes your copyright or any other intellectual
                                    property right, or that is offensive, abusive, defamatory or otherwise contrary to our <a href="#terms-of-use">Terms of Use</a> or <a href="#community-guidelines">Community Guidelines</a>. You can find further information on reporting copyright infringement on our    <a href="#copyright-guidelines">Copyright Information</a> pages.
                                    </p>
                                    <p>
                                        • Third Party Websites and Services Through the Platform you may have access to other websites and services. This section explains that these are separate
                                        third party services that are not under the control of Trident Cloud.
                                    </p>
                                    <p>
                                        • Blocking and Removal of Content This section makes it clear that Trident Cloud may block or remove content from the Platform.
                                    </p>
                                    <p>
                                    • Repeat Infringers Users who repeatedly infringe third party rights or breach our <a href="#terms-of-use">Terms of Use</a> or    <a href="#community-guidelines">Community Guidelines</a> risk having their Trackd accounts suspended or terminated, as explained in
                                        this section.
                                    </p>
                                    <p>
                                        • Disclaimer This section explains that Trident Cloud cannot give any guarantees that the Platform will always be available – sometimes even a platform as
                                        awesome as ours will have a few problems.
                                    </p>
                                    <p>
                                        • Limitation of Liability This section explains some of those things that Trident Cloud will not be liable for. Please make sure you read and understand
                                        this section.
                                    </p>
                                    <p>
                                        • Indemnification If you use the Platform in a way that results in damage to us, you will need to take responsibility for that.
                                    </p>
                                    <p>
                                        • Data Protection, Privacy and Cookies It is really important to us that you understand how we use your personal information. All information is collected,
                                        stored and used in accordance with our <a href="#privacy-policy">Privacy Policy</a>, so please make sure that you read and understand
                                        that policy. Like most other websites, we also use cookies to help us analyse how people use the Platform, so that we can keep improving our service. Our
                                        use of cookies is explained in our Cookies Policy. Please note: if you choose not to disable cookies within your browser, you will be indicating your
                                        consent to our use of cookies as described in our Cookies Policy, so please make sure that you read the policy carefully.
                                    </p>
                                    <p>
                                        • In-App Purchases This section tells you about the terms that apply to purchases made via our Apps
                                    </p>
                                    <p>
                                        • Changes to the Platform, Accounts and Pricing From time to time, we may need to make some changes to the Platform. This section explains your rights in
                                        this situation.
                                    </p>
                                    <p>
                                        • Termination This section explains how you can terminate your Trackd account and the grounds on which we can terminate your use of the Platform.
                                    </p>
                                    <p>
                                        • Assignment to Third Parties This section deals with Trident Cloud’s right to transfer this agreement to someone else.
                                    </p>
                                    <p>
                                        • Severability This is a standard legal provision, which says that any term that is not valid will be removed from the agreement without affecting the
                                        validity of the rest of the agreement.
                                    </p>
                                    <p>
                                    • Entire Agreement Your use of the Platform is governed by these Terms of Use, our <a href="#privacy-policy">Privacy Policy</a>,    <a href="#cookies-policy">Cookies Policy</a> and <a href="#community-guidelines">Community Guidelines</a>. Any
                                        changes need to be made in writing.
                                    </p>
                                    <p>
                                        • Third Party Rights These Terms of Use apply to the relationship between you and Trident Cloud only.
                                    </p>
                                    <p>
                                        • Applicable Law and Jurisdiction All of our documents are generally governed by English law.
                                    </p>
                                    <p>
                                        • Disclosures This section provides information about Trident Cloud, including how to contact us.
                                    </p>
                                    <h2>
                                        Acceptance of Terms of Use
                                    </h2>
                                    <p>
                                        Please read these Terms of Use, our Privacy Policy, Cookies Policy and <a href="#community-guidelines">Community Guidelines</a>, very
                                        carefully. If you do not agree to any of the provisions set out in those documents, you should not use the Website, Apps or any of the Services. By
                                        accessing or using the Platform, registering an account, or by viewing, accessing, streaming, recording, uploading or downloading any information or
                                        content from or to the Platform, you represent and warrant that you have read and understood the Terms of Use, Privacy Policy, Cookies Policy and Community
                                        Guidelines, will abide by them, and that you are either 18 years of age or more, or you are 13 years of age or more and have your parent(s)’ or legal
                                        guardian(s)’ permission to use the Platform.
                                    </p>
                                    <h2>
                                        Changes to Terms of Use
                                    </h2>
                                    <p>
                                        We reserve the right to change, alter, replace or otherwise modify these Terms of Use at any time. The date of last modification is stated at the end of
                                        these Terms of Use. It is your responsibility to check this page from time to time for updates.
                                    </p>
                                    <p>
                                        When we make any updates to these Terms of Use, we will highlight this fact on the Website. In addition, if you register an account and these Terms of Use
                                        are subsequently changed in any material respect (for example, for security, legal, or regulatory reasons), we will notify you in advance by sending a
                                        message to your Trackd account and/or an email to the email address that you have provided to us, and the revised Terms of Use will become effective four
                                        (4) weeks after such notification. You will have no obligation to continue using the Platform following any such notification, but if you do not terminate
                                        your account as described in the Termination section below during such four (4) week period, your continued use of the Platform or Apps after the end of
                                        that four (4) week period will constitute your acceptance of the revised Terms of Use.
                                    </p>
                                    <h2>
                                        Description of the Platform
                                    </h2>
                                    <p>
                                        The Platform is an audio recording, collaboration and hosting service. Registered users of the Platform may record, upload and post audio, text, photos,
                                        pictures, graphics, comments, and other content, data or information (“Content”), which will be stored by Trident Cloud at the direction of such registered
                                        users, and may be shared and distributed by such registered users, and other users of the Platform, using the tools and features provided as part of the
                                        Platform and accessible via the Website, Apps and elsewhere. The Platform also enables registered users to interact with one another and to contribute to
                                        songs and discussions, and enables any user of the Website, Apps or certain Services (who may or may not be registered users of the Platform) to record,
                                        view, listen to and share Content uploaded and made available by registered users.
                                    </p>
                                    <p>
                                        We may, from time to time, release new tools and resources on the Website, release new versions of our Apps, or introduce other services and/or features
                                        for the Platform. Any new services and features will be subject to these Terms of Use as well as any additional terms of use that we may release for those
                                        specific services or features.
                                    </p>
                                    <h2>
                                        Your Trackd Account
                                    </h2>
                                    <p>
                                        You must be at least 13 years old to register for an account. You are responsible for your account.
                                    </p>
                                    <p>
                                        When you register an account you’ve got to provide us with accurate information, it’s your job to keep your information updated if it changes. To register an account you must be at least 13 years old. To join a creator’s membership as a fan, or provide a membership as a creator, you must be at least 18 years old or have your parent’s permission. You are responsible for anything that occurs when anyone is signed in to your account, as well as the security of the account. Please contact us immediately via hello[at]tridentcloud.com if you believe your account is compromised. 
                                    </p>
                                    <p>
                                        You are not obliged to register to use the Platform. However, access to the Apps and certain Services is only available to registered users. 
                                    </p>
                                    <p>
                                        You can register to use the Platform either by providing your email address and choosing a username and password for your account or through certain third party sites, including, without limitation, Google, Facebook and Apple via the Websites or Apps. By granting Trackd access to any such third party accounts, you understand that Trackd may access, make available and store (if applicable) any text, graphics, images, information and other materials you have provided to and stored in such account, subject to your privacy settings for such account, if any, so that it is available on and through the Platform. You must ensure that the email address that you provide is, and remains, valid. Your email address and any other information you chose to provide about yourself will be treated in accordance with our Privacy Policy. 
                                    </p>
                                    <p>
                                        You are solely responsible for maintaining the confidentiality and security of your username and password, and you will remain responsible for all use of your username and password, and all activity emanating from your account, whether or not such activity was authorized by you. 
                                    </p>
                                    <p>
                                        If your username or password is lost or stolen, or if you believe that your account has been accessed by unauthorized third parties, you are advised to notify Trident Cloud in writing, and should change your password at the earliest possible opportunity. 
                                    </p>
                                    <p>
                                        We reserve the right to disallow, cancel, remove or reassign certain usernames and permalinks in appropriate circumstances, as determined by us in our sole discretion, and may, with or without prior notice, suspend or terminate your account if activities occur on that account which, in our sole discretion, would or might constitute a violation of these Terms of Use or our Community Guidelines, or an infringement or violation of the rights of any third party, or of any applicable laws or regulations. 
                                    </p>
                                    <p>
                                        You may terminate your account at any time as described in the Termination section below. 
                                    </p>

                                    <h2>
                                        Your Use of the Platform
                                    </h2>
                                    <p>
                                        Subject to your strict compliance with these Terms of Use and our Community Guidelines, Trident Cloud grants you a limited, personal, non-exclusive,
                                        revocable, non-assignable and non-transferable right and license to use the Platform in order to view Content uploaded and posted to the Website or Apps or
                                        listen to audio Content streamed from the Platform and to share and download audio Content using the features of the Platform where the appropriate
                                        functionality has been enabled by the user who uploaded the relevant Content (the “Uploader”).
                                    </p>
                                    <p>
                                        In addition, if you register to use the Platform, and subject to your strict compliance with these Terms of Use and our Community Guidelines, Trident Cloud
                                        grants you a limited, personal, non-exclusive, revocable, non-assignable and non-transferable right and licence to use the Platform in order to:
                                    </p>
                                    <p>
                                        (i) record, upload and post audio tracks and songs using the Website or Apps;
                                    </p>
                                    <p>
                                        (ii) collaborate with other users on their songs by recording or uploading audio or providing feedback to a user’s song;
                                    </p>
                                    <p>
                                        (iii) participate in the community areas and communicate with other members of the Trident Cloud; and
                                    </p>
                                    <p>
                                        (iv) use the Apps and other Services provided as part of the Platform strictly as permitted in accordance with these Terms of Use and any other terms
                                        applicable to those Apps or Services from time to time.
                                    </p>
                                    <p>
                                    The above licences are conditional upon your strict compliance with these Terms of Use and our    <a href="#community-guidelines">Community Guidelines</a>, including, without limitation, the following:
                                    </p>
                                    <p>
                                        (i) You must not copy, rip or capture, or attempt to copy, rip or capture, any audio Content from the Platform or any part of the Platform, other than by
                                        means of download in circumstances where the relevant Uploader has elected to permit downloads of the relevant item of Content.
                                    </p>
                                    <p>
                                        (ii) You must not adapt, copy, republish, make available or otherwise communicate to the public, display, perform, transfer, share, distribute or otherwise
                                        use or exploit any Content on or from the Platform, except (i) where such Content is Your Content, or (ii) as permitted under these Terms of Use, and
                                        within the parameters set by the Uploader (for example, under the terms of licences authorized by the Uploader).
                                    </p>
                                    <p>
                                        (iii) You must not use any Content (other than Your Content) in any way that is designed to create a separate content service or that replicates any part
                                        of the Platform or Apps offering.
                                    </p>
                                    <p>
                                        (iv) You must not employ scraping or similar techniques to aggregate, repurpose, republish or otherwise make use of any Content.
                                    </p>
                                    <p>
                                        (v) You must not employ any techniques or make use of any services, automated or otherwise, designed to misrepresent your activity on the Platform,
                                        including without limitation by the use of bots, botnets, scripts, apps, plugins, extensions or other automated means to register accounts, log in, add
                                        friends to your account, play Content, follow or unfollow other users, send messages, post comments, or otherwise to act on your behalf, particularly where
                                        such activity occurs in a multiple or repetitive fashion. You must not offer or promote the availability of any such techniques or services to any other
                                        users of the Platform.
                                    </p>
                                    <p>
                                        (vi) You must not alter or remove, attempt to alter or remove, any trademark, copyright or other proprietary or legal notices contained in, or appearing
                                        on, the Platform or any Content appearing on the Platform (other than Your Content).
                                    </p>
                                    <p>
                                        (vii) You must not, and must not permit any third party to, copy or adapt the object code of the Website or any of the Apps or Services, or reverse
                                        engineer, reverse assemble, decompile, modify or attempt to discover any source or object code of any part of the Platform, or circumvent or attempt to
                                        circumvent or copy any copy protection mechanism or access any rights management information pertaining to Content other than Your Content.
                                    </p>
                                    <p>
                                        (viii) You must not use the Platform or Apps to record, upload, post, store, transmit, display, copy, distribute, promote, make available or otherwise
                                        communicate to the public:
                                    </p>
                                    <p>
                                        • any Content that is offensive, abusive, libellous, defamatory, obscene, racist, sexually explicit, ethnically or culturally offensive, indecent, that
                                        promotes violence, terrorism, or illegal acts, incites hatred on grounds of race, gender, religion or sexual orientation, or is otherwise objectionable in
                                        Trident Cloud’s reasonable discretion;
                                    </p>
                                    <p>
                                        • any information, Content or other material that violates, plagiarises, misappropriates or infringes the rights of third parties including, without
                                        limitation, copyright, trademark rights, rights of privacy or publicity, confidential information or any other right;
                                    </p>
                                    <p>
                                        • any Content that violates, breaches or is contrary to any law, rule, regulation, court order or is otherwise is illegal or unlawful in Trident Cloud’s
                                        reasonable opinion;
                                    </p>
                                    <p>
                                        • any material of any kind that contains any virus, Trojan horse, spyware, adware, malware, bot, time bomb, worm, or other harmful or malicious component,
                                        which or might overburden, impair or disrupt the Platform or servers or networks forming part of, or connected to, the Platform, or which does or might
                                        restrict or inhibit any other user's use and enjoyment of the Platform; or
                                    </p>
                                    <p>
                                        • any unsolicited or unauthorised advertising, promotional messages, spam or any other form of solicitation.
                                    </p>
                                    <p>
                                        (ix) You must not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offence, give rise to civil
                                        liability or otherwise violate any law or regulation.
                                    </p>
                                    <p>
                                        (x) You must not rent, sell or lease access to the Platform, or any Content on the Platform, although this shall not prevent you from licensing, selling or
                                        otherwise exploiting Your Content outside of the Platform.
                                    </p>
                                    <p>
                                        (xi) You must not deliberately impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity, for example, by
                                        registering an account in the name of another person or company, or sending messages or making comments using the name of another person.
                                    </p>
                                    <p>
                                        (xii) You must not stalk, exploit, threaten, abuse or otherwise harass another user, or any Trident Cloud employee.
                                    </p>
                                    <p>
                                        (xiii) You must not use or attempt to use another person's account, password, or other information, unless you have express permission from that other
                                        person.
                                    </p>
                                    <p>
                                        (xiv) You must not sell or transfer, or offer to sell or transfer, any Trackd account to any third party without the prior written approval of Trident
                                        Cloud.
                                    </p>
                                    <p>
                                        (xv) You must not collect or attempt to collect personal data, or any other kind of information about other users, including without limitation, through
                                        spidering or any form of scraping.
                                    </p>
                                    <p>
                                        (xvi) You must not violate, circumvent or attempt to violate or circumvent any data security measures employed by Trident Cloud, Trackd or any Uploader;
                                        access or attempt to access data or materials which are not intended for your use; log into, or attempt to log into, a server or account which you are not
                                        authorized to access; attempt to scan or test the vulnerability of Trident Cloud’s servers, system or network or attempt to breach Trident Cloud’s data
                                        security or authentication procedures; attempt to interfere with the Website or the Services by any means including, without limitation, hacking Trident
                                        Cloud’s servers or systems, submitting a virus, overloading, mail-bombing or crashing. Without limitation to any other rights or remedies of Trident Cloud
                                        under these Terms of Use, Trident Cloud reserves the right to investigate any situation that appears to involve any of the above, and may report such
                                        matters to, and co-operate with, appropriate law enforcement authorities in prosecuting any users who have participated in any such violations.
                                    </p>
                                    <p>
                                        You agree to comply with the above conditions, and acknowledge and agree that Trident Cloud has the right, in its sole discretion, to terminate your
                                        account or take such other action as we see fit if you breach any of the above conditions or any of the other terms of these Terms of Use. This may include
                                        taking court action and/or reporting offending users to the relevant authorities.
                                    </p>
                                    <h2>
                                        Your Content
                                    </h2>
                                    <p>
                                        Any and all audio, text, photos, pictures, graphics, comments, and other content, data or information that you record, upload, store, transmit, submit,
                                        exchange or make available to or via the Platform (hereinafter "Your Content") is generated, owned and controlled solely by you, and not by Trident Cloud.
                                    </p>
                                    <p>
                                        Trident Cloud does not claim any ownership rights in Your Content, and you hereby expressly acknowledge and agree that Your Content remains your sole
                                        responsibility.
                                    </p>
                                    <p>
                                        Without prejudice to the conditions set forth in Your Use of the Platform you must not record, upload, store, distribute, send, transmit, display, perform,
                                        make available or otherwise communicate to the public any Content to which you do not hold the necessary rights. In particular, any unauthorized use of
                                        copyright protected material within Your Content (including by way of reproduction, distribution, modification, adaptation, public display, public
                                        performance, preparation of derivative works, making available or otherwise communicating to the public via the Platform) may constitute an infringement of
                                        third party rights and is strictly prohibited. Any such infringements may result in termination of your access to the Platform as described in the Repeat
                                        Infringers section below, and may also result in civil litigation or criminal prosecution by or on behalf of the relevant rights holder.
                                    </p>
                                    <p>
                                        We may, from time to time, invite or provide you with means to provide feedback regarding the Platform, and in such circumstances, any feedback you provide
                                        will be deemed non-confidential and Trident Cloud shall have the right, but not the obligation, to use such feedback on an unrestricted basis.
                                    </p>
                                    <h2>
                                        Grant of Licence
                                    </h2>
                                    <p>
                                        Our Platform allows you to limit and restrict the availability of certain of Your Content to other users of the Public or Platform and to users of Linked
                                        Services, at any time using the settings on the Song page for each Song you upload, subject to the provisions of the Disclaimer section below.
                                    </p>
                                    <p>
                                        Subject to your settings, you hereby grant to Trident Cloud an unrestricted, assignable, sublicenseable, revocable, royalty-free license throughout the
                                        universe to reproduce, distribute, transmit, publicly perform, make available to the public and otherwise use Your Content through any media and format now
                                        known or hereafter developed for the purposes of (i) providing the Platform and Services, including Trackd’s hosting, sharing and collaboration services;
                                        (ii) advertising, marketing and promoting the Platform; (iii) sharing Your Content with third parties and Linked Services, including Trackd users. You also
                                        hereby do and shall grant each user of the Platform, and to operators and users of any other websites, apps and/or platforms to which your Content has been
                                        shared or embedded using the Platform (“Linked Services”) a non-exclusive, perpetual, worldwide, royalty-free license to access Your Content through the
                                        Platform and to use, edit, modify, reproduce, distribute, contribute to, prepare derivative works of, display, perform and otherwise make available Your
                                        Content utilizing the features of the Platform and within the parameters set by you using the Platform. If you are a composer of author of a musical work
                                        and have affiliated with a performing rights organization (“PRO”), then you must notify your PRO of the royalty-free license you grant through this
                                        Agreement to us. You are solely responsible for ensuring your compliance with the relevant PRO’s reporting obligations.
                                    </p>
                                    <p>
                                        For the avoidance of doubt, the rights granted in herein to Trident Cloud, its users and Linked Services shall include, but are not limited to, the right
                                        to reproduce your sound recordings (and make mechanical reproductions of the musical works embodied in such sound recordings), and publicly perform your
                                        sound recordings (and the musical works embodied therein), all on a royalty-free basis.
                                    </p>
                                    <p>
                                        The licences granted in this section are granted separately with respect to each item of Your Content that you upload to the Platform. Licences with
                                        respect to audio Content, and any images or text within your account, will (subject to the following paragraph of these Terms of Use) terminate
                                        automatically when you remove such Content from your account. Licences with respect to tracks you record on other users’ songs, comments or other
                                        contributions that you make on the Platform will be perpetual and irrevocable, and will continue notwithstanding any termination of your account. Removal
                                        of your songs from your account will automatically result in the deletion of the relevant files from Trident Cloud’s systems and servers. However,
                                        notwithstanding the foregoing, you hereby acknowledge and agree that once Your Content (including your songs) is distributed to a Linked Service, Trident
                                        Cloud is not obligated to ensure the deletion of Your Content from any servers or systems operated by the operators of any Linked Service, or to require
                                        that any user of the Platform or any Linked Service deletes any item of Your Content.
                                    </p>
                                    <p>
                                        Any Content other than Your Content is the property of the relevant Uploader, and is or may be subject to copyright, trademark rights or other intellectual
                                        property or proprietary rights. Such Content may not be downloaded, reproduced, distributed, transmitted, re-uploaded, republished, displayed, sold,
                                        licensed, made available or otherwise communicated to the public or exploited for any purposes except via the features of the Platform from time to time
                                        and within the parameters set by the Uploader on the Platform or with the express written consent of the Uploader. Where you repost or access another
                                        user’s Content, you acquire no ownership rights whatsoever in that Content. Subject to the rights expressly granted in this section, all rights in Content
                                        are reserved to the relevant Uploader.
                                    </p>
                                    <h2>
                                        Representations and Warranties
                                    </h2>
                                    <p>
                                        You hereby represent and warrant to Trident Cloud as follows:
                                    </p>
                                    <p>
                                        (i) Your Content, and each and every part thereof, is an original work by you, or you have obtained all rights, licences, consents and permissions
                                        necessary in order to use, and to authorise Trident Cloud to use, Your Content pursuant to these Terms of Use, including, without limitation, the right to
                                        upload, reproduce, store, transmit, distribute, share, publicly display, make derivative works of, publicly perform, make available and otherwise
                                        communicate to the public Your Content, and each and every part thereof, on, through or via Platform and any Linked Services.
                                    </p>
                                    <p>
                                        (ii) Your Content and the availability thereof on the Platform does not and will not infringe or violate the rights of any third party, including, without
                                        limitation, any intellectual property rights, performers’ rights, rights of privacy or publicity, or rights in confidential information.
                                    </p>
                                    <p>
                                        (iii) You have obtained any and all necessary consents, permissions and/or releases from any and all persons appearing in Your Content in order to include
                                        their name, voice, performance or likeness in Your Content and to publish the same on the Platform and via any Linked Services.
                                    </p>
                                    <p>
                                        (iv) Your Content, including any comments that you may post on the Website or Apps, is not and will not be unlawful, offensive, abusive, libellous,
                                        defamatory, obscene, racist, sexually explicit, ethnically or culturally offensive, indecent, will not promote violence, terrorism, or illegal acts, or
                                        incite hatred on grounds of race, gender, religion or sexual orientation.
                                    </p>
                                    <p>
                                        (v) Your Content does not and will not create any liability on the part of Trident Cloud, its subsidiaries, affiliates, successors, and assigns, and their
                                        respective employees, agents, directors, officers and/or shareholders.
                                    </p>
                                    <p>
                                        Trident Cloud reserves the right to remove Your Content, suspend or terminate your access to the Platform and/or pursue all legal remedies if we believe
                                        that any of Your Content breaches any of the foregoing representations or warranties, or otherwise infringes another person's rights or violates any law,
                                        rule or regulation.
                                    </p>
                                    <h2>
                                        Liability for Content
                                    </h2>
                                    <p>
                                        You hereby acknowledge and agree that Trident Cloud (i) records and stores Content and other information at the direction, request and with the
                                        authorisation of its users, (ii) acts merely as a passive conduit and/or host for the uploading, storage and distribution of such Content, and (iii) plays
                                        no active role and gives no assistance in the presentation or use of the Content. You are solely responsible for all of Your Content that you upload, post
                                        or distribute to, on or through the Platform or Apps, and to the extent permissible by law, Trident Cloud excludes all liability with respect to all
                                        Content (including Your Content) and the activities of its users with respect thereto.
                                    </p>
                                    <p>
                                        You hereby acknowledge and agree that Trident Cloud cannot and does not review the Content created or uploaded by its users, and neither Trident Cloud nor
                                        its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders has any obligation, and does not undertake or
                                        assume any duty, to monitor the Platform for Content that is inappropriate, that does or might infringe any third party rights, or has otherwise been
                                        uploaded in breach of these Terms of Use or applicable law.
                                    </p>
                                    <p>
                                        Trident Cloud and its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders hereby exclude, to the fullest
                                        extent permitted by law, any and all liability which may arise from any Content uploaded to the Platform or Apps by users, including, but not limited to,
                                        any claims for infringement of intellectual property rights, rights of privacy or publicity rights, any claims relating to publication of defamatory,
                                        pornographic, obscene or offensive material, or any claims relating to the completeness, accuracy, currency or reliability of any information provided by
                                        users of the Platform. By using the Platform, you irrevocably waive the right to assert any claim with respect to any of the foregoing against Trident
                                        Cloud or any of its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers or shareholders.
                                    </p>
                                    <h2>
                                        Reporting Infringements
                                    </h2>
                                    <p>
                                        If you discover any Content on the Platform or Apps that you believe infringes your copyright, please report this to us using any of the methods outlined
                                        on our Copyright Information pages.
                                    </p>
                                    <p>
                                        If you would prefer to send us your own written notification, please make sure that you include the following information:
                                    </p>
                                    <p>
                                        • a statement that you have identified Content on Trident Cloud that infringes your copyright or the copyright of a third party on whose behalf you are
                                        entitled to act;
                                    </p>
                                    <p>
                                        • a description of the copyright work(s) that you claim have been infringed;
                                    </p>
                                    <p>
                                        • a description of the Content that you claim is infringing and the URL(s) where such Content can be located;
                                    </p>
                                    <p>
                                        • your full name, address and telephone number, a valid email address on which you can be contacted, and your Trackd user name if you have one;
                                    </p>
                                    <p>
                                        • a statement by you that you have a good faith belief that the disputed use of the material is not authorized by the copyright owner, its agent, or the
                                        law; and
                                    </p>
                                    <p>
                                        • a statement by you that the information in your notice is accurate and that you are authorized to act on behalf of the owner of the exclusive right that
                                        is allegedly infringed;
                                    </p>
                                    <p>
                                        In addition, if you wish for your notice to be considered as a notice pursuant to the United States Digital Millennium Copyright Act 17 U.S.C. §512(c),
                                        please also include the following:
                                    </p>
                                    <p>
                                        • with respect to your statement that you are authorized to act on behalf of the owner of the exclusive right that is allegedly infringed, confirmation
                                        that such statement is made under penalty of perjury; and
                                    </p>
                                    <p>
                                        • your electronic or physical signature (which may be a scanned copy).
                                    </p>
                                    <p>
                                        Your notice should be sent to us by email to legal (at) tridentcloud.com and/or by mail to the following address:
                                    </p>
                                    <p>
                                        Trident Cloud Limited, Richmond House, Walkern Road, Stevenage. Hertfordshire. SG1 3QP, United Kingdom.
                                    </p>
                                    <h2>
                                        Attn: Copyright Team
                                    </h2>
                                    <p>
                                        The foregoing process applies to copyright only. If you discover any Content that infringes any or violates any of your other rights or which you believe
                                        is defamatory, pornographic, obscene, racist or otherwise liable to cause widespread offence, or which constitutes impersonation, harassment, spam or
                                        otherwise violates these Terms of Use, our Community Guidelines or applicable law, please report this to us at legal (at) tridentcloud.com.
                                    </p>
                                    <h2>
                                        Third Party Websites and Services
                                    </h2>
                                    <p>
                                        The Platform may provide you with access to third party websites, databases, networks, servers, information, software, programs, systems, directories,
                                        applications, products or services, including without limitation, Linked Services (hereinafter “External Services”).
                                    </p>
                                    <p>
                                        Trident Cloud does not have or maintain any control over External Services, and is not and cannot be responsible for their content, operation or use. By
                                        linking or otherwise providing access to any External Services, Trident Cloud does not give any representation, warranty or endorsement, express or
                                        implied, with respect to the legality, accuracy, quality or authenticity of content, information or services provided by such External Services.
                                    </p>
                                    <p>
                                        External Services may have their own terms of use and/or privacy policy, and may have different practices and requirements to those operated by Trident
                                        Cloud with respect to the Platform. You are solely responsible for reviewing any terms of use, privacy policy or other terms governing your use of these
                                        External Services, which you use at your own risk. You are advised to make reasonable enquiries and investigations before entering into any transaction,
                                        financial or otherwise, and whether online or offline, with any third party related to any External Services.
                                    </p>
                                    <p>
                                        You are solely responsible for taking the precautions necessary to protect yourself from fraud when using External Services, and to protect your computer
                                        systems from viruses, worms, Trojan horses, and other harmful or destructive content and material that may be included on or may emanate from any External
                                        Services.
                                    </p>
                                    <p>
                                        Trident Cloud disclaims any and all responsibility or liability for any harm resulting from your use of External Services, and you hereby irrevocably waive
                                        any claim against Trident Cloud with respect to the content or operation of any External Services.
                                    </p>
                                    <h2>
                                        Blocking and Removal of Content
                                    </h2>
                                    <p>
                                        Notwithstanding the fact that Trident Cloud has no legal obligation to monitor the Content on the Platform or Apps, Trident Cloud reserves the right to
                                        block, remove or delete any Content at any time, and to limit or restrict access to any Content, for any reason and without liability, including without
                                        limitation, if we have reason to believe that such Content does or might infringe the rights of any third party, has been uploaded or posted in breach of
                                        these Terms of Use, our Community Guidelines or applicable law, or is otherwise unacceptable to Trident Cloud.
                                    </p>
                                    <p>
                                        Please also note that individual Uploaders have control over the audio Content that they store in their Trackd account from time to time, and may remove
                                        any or all audio Content or other Content without notice. You have no right of continued access to any particular item of Content and Trident Cloud shall
                                        have no liability in the event that you are unable to access an item of Content due to its removal from the Platform, whether by Trident Cloud or the
                                        relevant Uploader.
                                    </p>
                                    <h2>
                                        Repeat Infringers
                                    </h2>
                                    <p>
                                        Trident Cloud will suspend or terminate your access to the Platform or Apps if Trident Cloud determines, in its sole discretion, that you have repeatedly
                                        breached these Terms of Use or our Community Guidelines.
                                    </p>
                                    <p>
                                        If we receive a valid notification from a third party in accordance with our reporting processes or applicable law that any of Your Content infringes the
                                        copyright or other rights of such third party, or if we believe that your behaviour is inappropriate and violates our Community Guidelines, we will send
                                        you a written warning to this effect. Any user that receives more than two of these warnings is liable to have their access to the Platform or Apps
                                        terminated forthwith.
                                    </p>
                                    <p>
                                        We will also suspend or terminate your account without warning if ordered to do so by a court, and/or in other appropriate circumstances, as determined by
                                        Trident Cloud at its discretion.
                                    </p>
                                    <p>
                                        Please note we do not offer refunds to account holders whose accounts are terminated as a result of repeated infringement of these Terms of Use or our
                                        Community Guidelines.
                                    </p>
                                    <h2>
                                        Disclaimer
                                    </h2>
                                    <p>
                                        THE PLATFORM, INCLUDING, WITHOUT LIMITATION, THE WEBSITE, THE APPS AND ALL CONTENT AND SERVICES ACCESSED THROUGH OR VIA THE WEBSITE, THE APPS OR OTHERWISE,
                                        ARE PROVIDED “AS IS”, “AS AVAILABLE”, AND “WITH ALL FAULTS”.
                                    </p>
                                    <p>
                                        WHILST TRIDENT CLOUD USES REASONABLE ENDEAVOURS TO CORRECT ANY ERRORS OR OMISSIONS IN THE PLATFORM AS SOON AS PRACTICABLE ONCE THEY HAVE BEEN BROUGHT TO
                                        TRIDENT CLOUD’S ATTENTION, TRIDENT CLOUD MAKES NO PROMISES, GUARANTEES, REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER (EXPRESS OR IMPLIED) REGARDING
                                        THE WEBSITE, THE APPS, THE SERVICES OR ANY PART OR PARTS THEREOF, ANY CONTENT, OR ANY LINKED SERVICES OR OTHER EXTERNAL SERVICES. TRIDENT CLOUD DOES NOT
                                        WARRANT THAT YOUR USE OF THE PLATFORM WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE PLATFORM OR ANY PART
                                        OR PARTS THEREOF, THE CONTENT, OR THE SERVERS ON WHICH THE PLATFORM OPERATES ARE OR WILL BE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. TRIDENT CLOUD DOES
                                        NOT WARRANT THAT ANY TRANSMISSION OF CONTENT UPLOADED TO THE PLATFORM OR APPS WILL BE SECURE OR THAT ANY ELEMENTS OF THE PLATFORM DESIGNED TO PREVENT
                                        UNAUTHORISED ACCESS, SHARING OR DOWNLOAD OF CONTENT WILL BE EFFECTIVE IN ANY AND ALL CASES, AND DOES NOT WARRANT THAT YOUR USE OF THE PLATFORM IS LAWFUL IN
                                        ANY PARTICULAR JURISDICTION.
                                    </p>
                                    <p>
                                        TRIDENT CLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS, AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS,
                                        SPECIFICALLY DISCLAIM ALL OF THE FOREGOING WARRANTIES AND ANY OTHER WARRANTIES NOT EXPRESSLY SET OUT HEREIN TO THE FULLEST EXTENT PERMITTED BY LAW,
                                        INCLUDING WITHOUT LIMITATION ANY EXPRESS OR IMPLIED WARRANTIES REGARDING NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
                                    </p>
                                    <p>
                                        WHERE THE LAW OF ANY JURISDICTION LIMITS OR PROHIBITS THE DISCLAIMER OF IMPLIED OR OTHER WARRANTIES AS SET OUT ABOVE, THE ABOVE DISCLAIMERS SHALL NOT APPLY
                                        TO THE EXTENT THAT THE LAW OF SUCH JURISDICTION APPLIES TO THIS AGREEMENT.
                                    </p>
                                    <h2>
                                        Limitation of Liability
                                    </h2>
                                    <p>
                                        IN NO EVENT SHALL TRIDENT CLOUD’S AGGREGATE LIABILITY TO YOU UNDER THIS AGREEMENT EXCEED THE GREATER OF 100 GBP OR THE AMOUNTS (IF ANY) PAID BY YOU TO
                                        TRIDENT CLOUD DURING THE PREVIOUS TWELVE (12) MONTHS FOR THE SERVICES GIVING RISE TO THE CLAIM.
                                    </p>
                                    <p>
                                        TRIDENT CLOUD AND ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, AND ASSIGNS, AND THEIR RESPECTIVE EMPLOYEES, AGENTS, DIRECTORS, OFFICERS AND SHAREHOLDERS,
                                        SHALL HAVE NO LIABILITY FOR:
                                    </p>
                                    <p>
                                        1 ANY LOSS OR DAMAGE ARISING FROM:
                                    (A) YOUR INABILITY TO ACCESS OR USE THE PLATFORM, OR ANY PART OR PARTS THEREOF, OR TO ACCESS ANY CONTENT OR ANY EXTERNAL
                                        SERVICES VIA THE PLATFORM;
                                    (B) ANY CHANGES THAT TRIDENT CLOUD MAY MAKE TO THE PLATFORM OR ANY PART THEREOF, OR ANY TEMPORARY OR PERMANENT SUSPENSION OR
                                        CESSATION OF ACCESS TO THE PLATFORM OR ANY CONTENT IN OR FROM ANY OR ALL TERRITORIES;
                                    (C) ANY ACTION TAKEN AGAINST YOU BY THIRD PARTY RIGHTSHOLDERS WITH
                                        RESPECT TO ANY ALLEGED INFRINGEMENT OF SUCH THIRD PARTY’S RIGHTS RELATING TO YOUR CONTENT OR YOUR USE OF THE PLATFORM OR ANY ACTION TAKEN AS PART OF AN
                                        INVESTIGATION BY TRIDENT CLOUD OR ANY RELEVANT LAW ENFORCEMENT AUTHORITY REGARDING YOUR USE OF THE PLATFORM;
                                    (D) ANY ERRORS OR OMISSIONS IN THE PLATFORM’S
                                        TECHNICAL OPERATION, OR FROM ANY INACCURACY OR DEFECT IN ANY CONTENT OR ANY INFORMATION RELATING TO CONTENT;
                                    (E) YOUR FAILURE TO PROVIDE TRIDENT CLOUD WITH
                                        ACCURATE OR COMPLETE INFORMATION, OR YOUR FAILURE TO KEEP YOUR USERNAME OR PASSWORD SUITABLY CONFIDENTIAL;
                                    </p>
                                    <p>
                                        2 ANY LOSS OR DAMAGE TO ANY COMPUTER HARDWARE OR SOFTWARE, ANY LOSS OF DATA (INCLUDING YOUR CONTENT), OR ANY LOSS OR DAMAGE FROM ANY SECURITY BREACH;
                                        AND/OR
                                    </p>
                                    <p>
                                        3 ANY LOSS OF PROFITS, OR ANY LOSS YOU SUFFER WHICH IS NOT A FORESEEABLE CONSEQUENCE OF TRIDENT CLOUD BREACHING THESE TERMS OF USE. LOSSES ARE FORESEEABLE
                                        WHERE THEY COULD BE CONTEMPLATED BY YOU AND TRIDENT CLOUD AT THE TIME YOU AGREE TO THESE TERMS OF USE, AND THEREFORE DO NOT INCLUDE ANY INDIRECT LOSSES,
                                        SUCH AS LOSS OF OPPORTUNITY.
                                    </p>
                                    <p>
                                        ANY CLAIM OR CAUSE OF ACTION ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM MUST BE NOTIFIED TO TRIDENT CLOUD AS SOON AS POSSIBLE.
                                    </p>
                                    <p>
                                        APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY
                                        NOT APPLY TO YOU. IN SUCH CASES, YOU ACKNOWLEDGE AND AGREE THAT SUCH LIMITATIONS AND EXCLUSIONS REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN
                                        YOU AND TRIDENT CLOUD AND ARE FUNDAMENTAL ELEMENTS OF THE BARGAIN BETWEEN YOU AND TRIDENT CLOUD, AND THAT TRIDENT CLOUD’S LIABILITY WILL BE LIMITED TO THE
                                        MAXIMUM EXTENT PERMITTED BY LAW.
                                    </p>
                                    <p>
                                        NOTHING IN THESE TERMS OF USE LIMITS OR EXCLUDES THE LIABILITY OF TRIDENT CLOUD, ITS SUBSIDIARIES, SUCCESSORS, ASSIGNS, OR THEIR RESPECTIVE EMPLOYEES,
                                        AGENTS, DIRECTORS, OFFICERS AND/OR SHAREHOLDERS: (I) FOR ANY DEATH OR PERSONAL INJURY CAUSED BY ITS OR THEIR NEGLIGENCE, (II) FOR ANY FORM OF FRAUD OR
                                        DECEIT, (III) FOR ANY DAMAGES CAUSED WILFULLY OR BY GROSS NEGLIGENCE, OR (IV) FOR ANY FORM OF LIABILITY WHICH CANNOT BE LIMITED OR EXCLUDED BY LAW.
                                    </p>
                                    <h2>
                                        Indemnification
                                    </h2>
                                    <p>
                                        You hereby agree to indemnify, defend and hold harmless Trident Cloud, its successors, assigns, affiliates, agents, directors, officers, employees and
                                        shareholders from and against any and all claims, obligations, damages, losses, expenses, and costs, including reasonable attorneys' fees, resulting from:
                                    </p>
                                    <p>
                                        (i) any violation by you of these Terms of Use or our Community Guidelines;
                                    </p>
                                    <p>
                                        (ii) any third party claim of infringement of copyright or other intellectual property rights or invasion of privacy arising from the hosting or other use
                                        of Your Content on the Platform, and/or your making available thereof to other users of the Platform, and/or the actual use of Your Content by other users
                                        of the Platform or Linked Services in accordance with these Terms of Use and the parameters set by you with respect to the distribution and sharing of Your
                                        Content; and/or
                                    </p>
                                    <p>
                                        (iii) any activity related to your account, be it by you or by any other person accessing your account with or without your consent unless such activity
                                        was caused by the act or default of Trident Cloud.
                                    </p>
                                    <h2>
                                        Data Protection, Privacy and Cookies
                                    </h2>
                                    <p>
                                        All personal data that you provide to us in connection with your use of the Platform is collected, stored, used and disclosed by Trident Cloud in
                                        accordance with our Privacy Policy. In addition, in common with most online services, we use cookies to help us understand how people are using the
                                        Platform or Apps, so that we can continue to improve the service we offer. Our use of cookies, and how to disable cookies, is explained in our Cookies
                                        Policy. By accepting these Terms of Use and using the Platform or Apps, you also accept the terms of the Privacy Policy and our Cookies Policy.
                                    </p>
                                    <h2>
                                        Competitions and Other Promotions
                                    </h2>
                                    <p>
                                        From time to time, Trident Cloud may promote competitions, promotions, prize draws and other similar opportunities on the Platform or Apps (“Third Party
                                        Competitions”). Trident Cloud is not the sponsor or promoter of these Third Party Competitions, and does not bear any responsibility or liability for the
                                        actions or inactions of any third parties who organize, administer or are otherwise involved in any of promotion of these Third Party Competitions. If you
                                        wish to participate in any of these Third Party Competitions, it is your responsibility to read the terms and conditions applicable to the relevant Third
                                        Party Competition and to ensure that you understand the rules and any eligibility requirements, and are lawfully able to participate in such Third Party
                                        Competitions in your country of residence.
                                    </p>
                                    <h2>
                                        In-App Purchases
                                    </h2>
                                    <p>
                                        You may purchase certain App upgrades and premium services through the iTunes App Store. Apple does not allow for app developers to refund payments made
                                    through apps published in the iTunes App Store. All in-app purchases made on the iTunes App Store are subject to Apple’s    <a href="http://www.apple.com/legal/internet-services/itunes/us/terms.html">terms and conditions</a>.
                                    </p>
                                    <h2>
                                        Changes to the Platform, Apps, Accounts and Pricing
                                    </h2>
                                    <p>
                                        Trident Cloud reserves the right at any time and for any reason to suspend, discontinue, terminate or cease providing access to the Platform or any part
                                        thereof, temporarily or permanently, and whether in its entirety or with respect to individual territories only. In the case of any temporary or permanent
                                        suspension, discontinuation, termination or cessation of access, Trident Cloud shall use its reasonable endeavours to notify registered users of such
                                        decision in advance.
                                    </p>
                                    <p>
                                        You hereby agree that Trident Cloud and its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders shall
                                        not be liable to you or to any third party for any changes or modifications to the Website, Apps and/or any Services that Trident Cloud may wish to make
                                        from time to time, or for any decision to suspend, discontinue or terminate the Website, Apps, the Services or any part or parts thereof, or your
                                        possibility to use or access the same from or within any territory or territories.
                                    </p>
                                    <p>
                                        Trident Cloud may change the features of any type of account, may withdraw or, or introduce new features, products or types of account at any time and for
                                        any reason, and may change the prices charged for any of its accounts from time to time. In the event Trident Cloud proposes to make changes to any type of
                                        account to which you, and these changes are material and to your disadvantage, Trident Cloud will notify you of the proposed changes by sending a message
                                        to your account and/or an email to the then current email address that we have for your account, at least four (4) weeks in advance. You will have no
                                        obligation to continue using the Platform following any such notification, but if you do not terminate your account as described in the Termination section
                                        below during such four (4) week period, your continued use of your account after the end of that four (4) week period will constitute your acceptance of
                                        the changes to your account.
                                    </p>
                                    <h2>
                                        Termination
                                    </h2>
                                    <p>
                                        You may terminate this Agreement at any time by deleting your account and thereafter by ceasing to use the Platform. You may delete your account by
                                        emailing us with the request at goodbye (at) tridentcloud.com
                                    </p>
                                    <p>
                                        Trident Cloud may suspend your access to the Platform and/or terminate this Agreement at any time if (i) you are deemed to be a Repeat Infringer as
                                        described above; (ii) you are in breach of any of the material provision of these Terms of Use or our Community Guidelines, including without limitation,
                                        the provisions of the following sections: Your Use of the Platform, Your Content, Grant of Licence , and Your Representations and Warranties; (iii) Trident
                                        Cloud elects at its discretion to cease providing access to the Platform in the jurisdiction where you reside or from where you are attempting to access
                                        the Platform, or (iv) in other reasonable circumstances as determined by Trident Cloud at its discretion.
                                    </p>
                                    <p>
                                        Once your account has been terminated, any and all Content residing in your account, Platform, or pertaining to activity from your account (for example,
                                        data relating to the distribution or consumption of your sounds), may be irretrievably deleted by Trident Cloud, except to the extent that we are obliged
                                        or permitted to retain such content, data or information for a certain period of time in accordance with applicable laws and regulations and/or to protect
                                        our legitimate business interests. You are advised to save or back up any material that you have uploaded to your account before terminating your account,
                                        as Trident Cloud assumes no liability for any material that is irretrievably deleted following any termination of your account. Trident Cloud is not able
                                        to provide you with any file of data relating to activity associated with your account, whether before or after termination or cancellation. Data is
                                        provided and is accessible only for viewing via your account page, Apps or on the Website for as long as your account is active.
                                    </p>
                                    <p>
                                        If you access the Platform via any of our Apps or via any third party app connected to your account, deleting that app will not delete your account. If you
                                        wish to delete your account, you will need to email us at goodbye (at) tridentcloud.com
                                    </p>
                                    <p>
                                        The provisions of these Terms of Use that are intended by their nature to survive the termination or cancellation of this Agreement will survive the
                                        termination of this Agreement, including, but not limited to, those Sections entitled Your Trackd Account, Your Content, Grant of Licence , Representations
                                        and Warranties, Liability for Content, Disclaimer, Limitation of Liability, Indemnification, Termination and Right of Cancellation, Assignment to Third
                                        Parties, Severability, Entire Agreement, and Applicable Law and Jurisdiction, respectively.
                                    </p>
                                    <h2>
                                        Assignment to Third Parties
                                    </h2>
                                    <p>
                                        Trident Cloud may assign its rights and (where permissible by law) its obligations under this Agreement, in whole or in part, to any third party at any
                                        time without notice, including without limitation, to any person or entity acquiring all or substantially all of the assets or business of Trident Cloud.
                                        You may not assign this Agreement or the rights and duties hereunder, in whole or in part, to any third party without the prior written consent of Trident
                                        Cloud.
                                    </p>
                                    <h2>
                                        Severability
                                    </h2>
                                    <p>
                                        Should one or more provisions of these Terms of Use be found to be unlawful, void or unenforceable, such provision(s) shall be deemed severable and will
                                        not affect the validity and/or enforceability of the remaining provisions of the Terms of Use, which will remain in full force and effect.
                                    </p>
                                    <h2>
                                        Entire Agreement
                                    </h2>
                                    <p>
                                        These Terms of Use, together with the Community Guidelines, Privacy Policy and Cookies Policy, constitute the entire agreement between you and Trident
                                        Cloud with respect to your use of the Platform and Apps (other than any use of Trident Cloud APIs which may also be subject to separate API Terms of Use),
                                        and supersede any prior agreement between you and Trident Cloud. Any modifications to this Agreement must be made in writing.
                                    </p>
                                    <h2>
                                        Applicable Law and Jurisdiction
                                    </h2>
                                    <p>
                                        Except where otherwise required by the mandatory law of the United States or any member state of the European Union
                                    </p>
                                    <p>
                                        (i) this Agreement is subject to the laws of the United Kingdom, excluding the UN Convention on Contracts for the International Sale of Goods (CISG) and
                                        excluding the principles of conflict of laws (international private law); and
                                    </p>
                                    <p>
                                        (ii) you hereby agree, and Trident Cloud agrees, to submit to the exclusive jurisdiction of the courts in London, United Kingdom for resolution of any
                                        dispute, action or proceeding arising in connection with this Agreement.
                                    </p>
                                    <p>
                                        The foregoing provisions of this Applicable Law and Jurisdiction section do not apply to any claim in which Trident Cloud seeks equitable relief of any
                                        kind. You acknowledge that, in the event of a breach of this Agreement by Trident Cloud or any third party, the damage or harm, if any, caused to you will
                                        not entitle you to seek injunctive or other equitable relief against Trident Cloud, including with respect to Your Content and/or the Platform, and your
                                        only remedy shall be for monetary damages, subject to the limitations of liability set forth in these Terms of Use.
                                    </p>
                                    <h2>
                                        Disclosures
                                    </h2>
                                    <p>
                                        The services hereunder are offered by Trident Cloud Limited, a company incorporated under the laws of England &amp; Wales and with its main place of
                                        business at Richmond House, Walkern Road, Stevenage, Hertfordshire. SG1 3QP. United Kingdom. More information about Trident Cloud is available here. You
                                        may contact us by sending correspondence to the foregoing address or by emailing us at hello (at) tridentcloud.com. If you are a resident of the State of
                                        California, you may have these Terms of Use mailed to you electronically by sending a letter to the foregoing address with your electronic mail address and
                                        a request for these Terms of Use.
                                    </p>
                                    <p>
                                        Last Amended: 21 May 2018
                                    </p>
                            </div>


                            <div id="privacy-policy">
                            <p>
                            Welcome to Trackd®, a service provided by Trident Cloud® Limited (“Trident Cloud”, “Trackd”, “we” “our”, “us”).
                            </p>
                            <p>
                            Your privacy is important to us. This Privacy Policy explains how we collect, store, use and disclose your information when you use trackdmusic.com and
                            tridentcloud.com (together, the “Websites”), our mobile and desktop apps, such as Trackd, (the "Apps") and all related sites, players, widgets, tools,
                            apps, data, software, APIs and other services provided by Trident Cloud (the “Services”).
                            </p>
                            <p>
                            This Privacy Policy explains the following, amongst other things:
                            </p>
                            <p>
                            • Our principles with respect to your information and your privacy
                            </p>
                            <p>
                            • The information we collect about you
                            </p>
                            <p>
                            • How we use your information
                            </p>
                            <p>
                            • How we share your information
                            </p>
                            <p>
                            • How we use cookies and similar technology
                            </p>
                            <p>
                            • Your choices with respect to your information
                            </p>
                            <p>
                            • How to contact us regarding privacy issues
                            </p>
                            <p>
                            <strong>
                            By using the Website, the Apps or any of the Services, and in particular by registering a Trackd® account, you are consenting to the use of your
                            information in the manner set out in this Privacy Policy.
                            </strong>
                            </p>
                            <p>
                            For your convenience, information relating to our use of cookies and similar technologies is set out in a separate Cookies Policy. The Cookies Policy forms
                            part of the Privacy Policy, and whenever we refer to the Privacy Policy, we are referring to the Privacy Policy incorporating the Cookies Policy.
                            </p>
                            <p>
                            Please take some time to read this Privacy Policy (including the Cookies Policy), and make sure you are happy with our use and disclosure of your
                            information.
                            </p>
                            <p>
                            If you do not agree to any of the provisions of this Privacy Policy, you should not use the Website, the Apps or any of the Services. If you have any
                            questions or concerns, you can contact us at privacy (at) tridentcloud.com.
                            </p>
                            <p>
                            Please note that this Privacy Policy only applies to the Website, the Apps and the Services (together, the “Platform”). When using the Platform, you may
                            find links to other websites, apps and services, or tools that enable you to share information with other websites, apps and services. Trident Cloud is not
                            responsible for the privacy practices of these other websites, apps and services, and we recommend that you review the privacy policies of each of these
                            websites, apps or services before connecting your Trackd account or sharing any personal data.
                            </p>
                            <h2>
                            Our Principles
                            </h2>
                            <p>
                            We have a pretty simple approach to data protection and privacy, which can be summarised as follows:
                            </p>
                            <p>
                            You should know exactly what we do with your information
                            </p>
                            <p>
                            This Privacy Policy is designed to provide transparency regarding our data protection practices. If there’s anything that’s not clear from this Privacy
                            Policy, please feel free to email us at privacy (at) tridentcloud.com.
                            </p>
                            <p>
                            You should have full control over your information
                            </p>
                            <p>
                            We’ve designed the Website and Apps to give you control over the information you publish and share and other sites and services to which you connect your
                            Trackd account. Please take full advantage of these tools and make sure you only share what you want to share.
                            </p>
                            <p>
                            Information we collect about you
                            </p>
                            <p>
                            We collect information about you from various sources:
                            </p>
                            <p>
                            Information provided by you
                            </p>
                            <p>
                            You don’t need to provide us with any personal data in order to visit the Website. However, the Apps and certain Services do require that you register for
                            a Trackd account and, by doing so, you will provide us with certain information:
                            </p>
                            <p>
                            • Essential information:
                            </p>
                            <p>
                            Depending on how you choose to register your Trackd account, you may be required to provide your full name, email address, birth date, choose a username
                            and password and provide information on the type of artist you are;
                            </p>
                            <p>
                            • Profile information: You may choose, at your discretion, to provide additional information for your public profile – for example:
                            </p>
                            <p>
                            • your real name or professional pseudonym (artist name)
                            </p>
                            <p>
                            • a name (which may be your real name or a pseudonym)
                            </p>
                            <p>
                            • your location
                            </p>
                            <p>
                            • a profile picture or avatar
                            </p>
                            <p>
                            • information about how you categorise yourself with respect to your content (for example, whether you are a musician, songwriter, producer or some other
                            category of creator), your skills, genres in which you create music;
                            </p>
                            <p>
                            • details of your other websites and social media profiles, including links to those websites and profiles
                            </p>
                            <p>
                            • None of this profile information is mandatory, and any information you provide for your profile may be deleted, edited, changed or amended by you at any
                            time. For more information, see the Choice and Control section below.
                            </p>
                            <p>
                            • Information from correspondence: You will provide certain personal data if you contact us by email, mail, fax or other offline or online means or use any
                            of the webforms on the Website.
                            </p>
                            <p>
                            • Survey information: If you participate in any survey, you may provide certain personal data as part of your response, unless you respond anonymously.
                            </p>
                            <p>
                            • Information that you post: You may provide personal data when you upload or record sounds in the Apps or Platform, or when you post comments or
                            contribute to community discussions.
                            </p>
                            <p>
                            Information we collect automatically
                            </p>
                            <p>
                            There is certain information that we collect automatically as the result of your use of the Platform, or through the use of web analytics services as
                            described in our <a href="#cookies-policy">Cookies Policy</a>. This information includes but is not limited to:
                            </p>
                            <p>
                            • the Internet Protocol (IP) address of the device from which you access the Platform (this can sometimes be used to derive the country or city from which
                            you are accessing the Platform)
                            </p>
                            <p>
                            • the site that you visited immediately prior to visiting the Website
                            </p>
                            <p>
                            • the specific actions that you take on the Platform, including the pages that you visit, streaming or downloading songs, uploading or recording audio,
                            connecting your Facebook or Twitter account, sharing a song with another user, following or unfollowing another user, joining or leaving a collaboration,
                            posting a comment, or performing a search
                            </p>
                            <p>
                            • any search terms that you may enter on the Platform
                            </p>
                            <p>
                            • the time, frequency and duration of your visits to the Platform
                            </p>
                            <p>
                            • your browser type and operating system
                            </p>
                            <p>
                            • the nature of the device from which you are accessing the Platform, for example, whether you are accessing the Platform from a personal computer or from
                            a mobile device
                            </p>
                            <p>
                            • your location data (e.g. GPS) when using the Apps,
                            </p>
                            <p>
                            • information collected through cookies and similar technology, as described in our <a href="#cookies-policy">Cookies Policy</a>
                            </p>
                            <p>
                            • information regarding your interaction with email or Trackd messages, for example, whether you opened, clicked on, or forwarded the email message
                            </p>
                            <h2>
                            Information from other sources
                            </h2>

                            <ul data-stringify-type="unordered-list" class="p-rich_text_list p-rich_text_list__bullet" data-indent="0">
                            <li>Single-Sign Ons – If you sign up for Trackd through a third party application like Apple, Facebook or Google, you authorise us to collect your authentication information, such as your username and encrypted access credentials, and other information available through the third party application account, including the following information:</li><br>
                            <li>Apple – You can sign up and log in to Trackd using your Apple ID. When you sign up using Apple, Apple will ask your permission to share certain information from your account with Trackd. This information is collected by Apple and is provided to us under the terms of<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="https://support.apple.com/en-us/HT210699" delay="150" data-sk="tooltip_parent" href="https://support.apple.com/en-us/HT210699" rel="noopener noreferrer">Apple</a><a target="_blank" class="c-link" data-stringify-link="https://policies.google.com/privacy" delay="150" data-sk="tooltip_parent" href="https://policies.google.com/privacy" rel="noopener noreferrer">’</a><a target="_blank" class="c-link" data-stringify-link="https://support.apple.com/en-us/HT210699" delay="150" data-sk="tooltip_parent" href="https://support.apple.com/en-us/HT210699" rel="noopener noreferrer">s Privacy Policy</a>. You can regulate the information that we receive from Apple by visiting<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="http://appleid.apple.com" delay="150" data-sk="tooltip_parent" href="http://appleid.apple.com/" rel="noopener noreferrer">appleid.apple.com</a>. If you signed up Apple by mistake, you can delete your account by emailing us at goodbye (at)&nbsp;<a target="_blank" class="c-link" data-stringify-link="http://tridentcloud.com" delay="150" data-sk="tooltip_parent" href="http://tridentcloud.com/" rel="noopener noreferrer">tridentcloud.com</a>.</li>
                            <br>
                            <li>Facebook – Trackd allows you to sign up and sign in using your Facebook account. If you sign up using Facebook, Facebook will ask your permission to share certain information from your Facebook account with Trackd. This includes your Facebook user ID, first name, last name, email address (optional), gender, locale, your time zone, birthday and profile picture. This information is collected by Facebook and is provided to Trackd under the terms of<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="http://www.facebook.com/policy.php" delay="150" data-sk="tooltip_parent" href="http://www.facebook.com/policy.php" rel="noopener noreferrer">Facebook’s Privacy Policy</a>. You can control the information that we receive from Facebook using the privacy and data settings in your Facebook account. If you signed up using Facebook by mistake, you can delete your account by emailing us at goodbye (at)&nbsp;<a target="_blank" class="c-link" data-stringify-link="http://tridentcloud.com" delay="150" data-sk="tooltip_parent" href="http://tridentcloud.com/" rel="noopener noreferrer">tridentcloud.com</a>.</li> <br>
                            <li>Google – You can sign up and log in to Trackd using your Google account. When you sign up using Google, Google will ask your permission to share certain information and data from your Google account with Trackd. This includes your Google email address, birthdate (optional), gender (optional), and avatar (optional). In addition consent may be requested from you to enable Trackd to access your files on your Google Drive. This is in accordance with<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="https://policies.google.com/terms" delay="150" data-sk="tooltip_parent" href="https://policies.google.com/terms" rel="noopener noreferrer">Google</a><a target="_blank" class="c-link" data-stringify-link="https://policies.google.com/privacy" delay="150" data-sk="tooltip_parent" href="https://policies.google.com/privacy" rel="noopener noreferrer">’</a><a target="_blank" class="c-link" data-stringify-link="https://policies.google.com/terms" delay="150" data-sk="tooltip_parent" href="https://policies.google.com/terms" rel="noopener noreferrer">s Terms of Service</a><span>&nbsp;</span>and the<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="https://www.google.com/drive/terms-of-service/" delay="150" data-sk="tooltip_parent" href="https://www.google.com/drive/terms-of-service/" rel="noopener noreferrer">Google Drive Terms of Service</a>. This information is collected by Google and is provided to us under the terms of<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="https://policies.google.com/privacy" delay="150" data-sk="tooltip_parent" href="https://policies.google.com/privacy" rel="noopener noreferrer">Google’s Privacy Policy</a>. You can regulate the information that we receive from Google using your<span>&nbsp;</span><a target="_blank" class="c-link" data-stringify-link="https://myaccount.google.com/privacy#toolsyoucanusenow" delay="150" data-sk="tooltip_parent" href="https://myaccount.google.com/privacy#toolsyoucanusenow" rel="noopener noreferrer">Google activity controls</a>. If you signed up using Google by mistake, you can delete your account by emailing us at goodbye (at)&nbsp;<a target="_blank" class="c-link" data-stringify-link="http://tridentcloud.com" delay="150" data-sk="tooltip_parent" href="http://tridentcloud.com/" rel="noopener noreferrer">tridentcloud.com</a>.</li>
                            </ul>
                            <h2>
                            How we use your information
                            </h2>
                            <p>
                            We use the information that we collect about you for the following purposes:
                            </p>
                            <p>
                            Use of and interaction with the Platform:
                            </p>
                            <p>
                            • To operate and maintain your Trackd account, and to provide you with access to the Website and use of the Apps and any Services that you may request from
                            time to time. Your username and password are used to identify you when you log into the Platform.
                            </p>
                            <p>
                            • To identify you as the creator of the tracks that you upload, the comments that you post and/or the other contributions that you make to the Platform.
                            </p>
                            <p>
                            • To seek your participation in surveys, and to conduct and analyse the results of those surveys if you choose to participate.
                            </p>
                            <p>
                            • To provide you with technical support.
                            </p>
                            <p>
                            • To respond to you about any comment or enquiry you have submitted.
                            </p>
                            <p>
                            • To provide other users with data regarding people's usage of their songs and tracks, i.e. streaming and downloading their tracks or following their
                            profiles.
                            </p>
                            <p>
                            • To prevent or take action against activities that are, or may be, in breach of our Terms of Use, Community Guidelines or applicable law.
                            </p>
                            <p>
                            • We use your month and year of birth to enable age restriction.
                            </p>
                            <p>
                            • Any additional information that you provide as part of your public profile, such as your real name, and links to your website and other social media
                            profiles (but not your email address), will be published on your public profile page. This information will be publicly accessible and may be viewed by
                            anyone accessing the Website and Apps, or using our API or other Services. Please bear this in mind when considering whether to provide any additional
                            information about yourself.
                            </p>
                            <p>
                            • Your email address will be used to send you service updates and notifications regarding your account, and newsletters, marketing messages and certain
                            email notifications, which you may choose to unsubscribe from.
                            </p>
                            <p>
                            • If you are a Facebook or Twitter user, and one of your Facebook or Twitter friends registers for a Trackd account, we may let your friends who already
                            are on Trackd know that you joined or will suggest to your Facebook or Twitter friend that you might be someone they may wish to follow on Trackd.
                            </p>
                            <p>
                            • If you are a Facebook or Twitter user and sign up using Facebook or Twitter, we may also use the information we receive about you from Facebook or
                            Twitter to suggest or connect you to users that you may wish to follow on Trackd. It will be up to you if you choose to follow these users and you can
                            unfollow them at any time.
                            </p>
                            <h2>
                            Improving and customizing the Platform and advertising:
                            </h2>
                            <p>
                            • To analyse the use of the Platform, and the people visiting the Website and using the Apps and Services, in order to improve Trackd and customize it to
                            your needs and interests.
                            </p>
                            <p>
                            • To show you ads on behalf of advertisers, we use information that you make available to us when you interact with the Platform (e.g. by recording and
                            sharing songs, collaborating with other users, listening, favoriting or creating playlists), including location data, together with information you provide
                            to us through the Platform, e.g. demographic information you choose to make available to us (such as your age or gender) directly or through third party
                            services. This allows us to show you ads that are more relevant and interesting to you. Please note that we do not share personal data with advertisers.
                            Instead, advertisers pre-define a specific audience by certain generic criteria (e.g. the city of residence, the age range, or the number of followers of
                            an unidentified user) for a specific ad campaign. If your profile matches these generic criteria, we may choose to display a suitable ad to you. We may
                            also display ads based on the content that you have recently viewed or searched. Before we may use location data from the app for the first time, your
                            mobile device will generally ask you for permission first. In case you gave permission to do so, location based services in your device will collect
                            location data for a couple of seconds. These will then be shared with us or a respective service provider.
                            </p>
                            <p>
                            • To customize your use of the Platform and/or the content of any email newsletter or other material that we may send to you from time to time.
                            </p>
                            <p>
                            For other purposes, provided we disclose this to you at the relevant time, and provided that you agree to the proposed use of your personal data.
                            </p>
                            <h2>
                            Sharing of your information
                            </h2>
                            <p>
                            We will not share your information with any third party, except as described in this Privacy Policy (including our    <a href="#cookies-policy">Cookies Policy</a>). There are circumstances where we may need to share some of the information we collect
                            about you or which you provide to us - these circumstances are as follows:
                            </p>
                            <p>
                            • Other users: Any information in your public profile (other than your email address) will be accessible by other users of the Platform, who may view your
                            profile information, listen to and comment on any of your public songs and add themselves to your list of followers. Similarly, if you comment on any songs
                            on the Platform, your comments will be available to all users of the Platform.
                            </p>
                            <p>
                            • With your consent: We will disclose your information if you have explicitly agreed that we may do so. We will make this clear to you at the point at
                            which we collect your information.
                            </p>
                            <p>
                            • Service providers: We use certain reputable third parties, some of whom may be located outside of the European Economic Area, to provide us with certain
                            specialized services related to the Platform. These third parties will have access to certain information about you, but only where this is necessary in
                            order for those third parties to provide their services to us. Where we transfer personal data to these third parties, we ask and require these third
                            parties to implement appropriate organisational and technical security measures to protect against unauthorised disclosure of personal data, and only to
                            process personal data in accordance with our instructions and to the extent necessary to provide their services to us.
                            </p>
                            <p>
                            • Other networks and connected apps: If you choose to connect your Trackd account to other apps or social networks such as Facebook or Twitter, you will be
                            sharing certain information with these apps or networks. In the case of Facebook or Twitter, any new public songs that you post or listen to on Trackd or
                            any new favourites may be shared to those networks and will be visible to your followers and friends on those networks. In the case of connected apps, you
                            will need to provide the app developer with full access to your Trackd account in order to upload and download sounds, or comment on, favourite or repost
                            songs from within the app. This may mean sharing your public information, plus access to your songs. Trident Cloud is not responsible for these other apps
                            or networks, so please make sure you only connect your account with apps or services that you trust. For information on how to control the information that
                            your share, and how to disconnect your account from other networks or apps, please see the Choice and Control section below.
                            </p>
                            <p>
                            • As aggregated data: We may aggregate your personal data with similar data relating to other users of the Platform in order to create statistical
                            information regarding the Platform and its use, which we may then share with third parties or make publicly available. However, none of this information
                            would include any email address or other contact information, or anything that could be used to identify you individually, either online or in real life.
                            </p>
                            <p>
                            • If required by law: We will disclose your information if we believe in good faith that we are permitted or required to do so by law, including in
                            response to a court order, subpoena or other legal demand or request.
                            </p>
                            <p>
                            • To protect our interests: We may disclose your information if we feel this is necessary in order to protect or defend our legitimate rights and
                            interests, or those of our users, employees, directors or shareholders, and/or to ensure the safety and security of the Platform and/or the Trackd
                            community.
                            </p>
                            <p>
                            • In the context of a business transfer: We may transfer your information to any person or company that acquires all or substantially all of the assets or
                            business of Trident Cloud, or on a merger of our business, or in the event of our insolvency.
                            </p>
                            <h2>
                            Cookies and similar technology
                            </h2>
                            <p>
                            In common with most websites, we use cookies and other standard Internet technologies to help us improve the Website and the Apps and Services we provide.
                            We have included information about our use of cookies and similar technology in a separate    <a href="#cookies-policy">Cookies Policy</a> that forms part of this Privacy Policy. The Cookies Policy also includes information
                            about how you can block or disable third party cookies (which we only use for the purposes of analyzing the use of our Platform and optimizing the content
                            on our Platform), and how to opt out of other technologies such as bug reporting within our mobile apps.
                            </p>
                            <p>
                            Ads displayed to you are in some cases provided by third parties. These may and as far as allowed by your settings or your device, use information about
                            your visit and interaction with the Platform in order to show you personalized ads of products and services that may be of interest to you. Personal
                            information such as your name or email address will not be shared with these.
                            </p>
                            <p>
                            If you choose to use the Platform without blocking or disabling cookies or opting out of other technologies as described in our    <a href="#cookies-policy">Cookies Policy</a>, you will indicate your consent to our use of cookies and similar technologies and to our
                            use (in accordance with this Privacy Policy and our Cookies Policy) of any personal data that we collect using these technologies.
                            </p>
                            <h2>
                            Choice and control
                            </h2>
                            <p>
                            It is not necessary for you to provide us with any personal data in order to visit the Website, although certain information will be collected
                            automatically by virtue of your visit (as described above) and certain information may be required for your use of the Apps or other Services. If you do
                            decide to register a Trackd account, you can control your information in the following ways.
                            </p>
                            <p>
                            It is possible to unsubscribe from email newsletters and notifications (other than essential account notifications) at any time by clicking on the link at
                            the end of each email.
                            </p>
                            <h2>
                            Sharing with other apps and networks
                            </h2>
                            <p>
                            If you sign up for Trackd using your Facebook or Twitter account, your Trackd account and your Facebook or Twitter account respectively will be connected
                            automatically. Information regarding the public songs that you record, collaborate on, post, listen to or favourite on Trackd may be shared with the
                            connected Facebook or Twitter account. Content that you share with Facebook may appear on your timeline and in your Facebook friends’ newsfeeds. Content
                            you share with Twitter may be seen by the people following you and shown in your Twitter feed. If you do not want this information shared with Facebook or
                            Twitter, please change your Settings.
                            </p>
                            <p>
                            Please note that this Privacy Policy does not apply to any third party sites or applications, and we cannot control the activities of those sites or
                            applications. You are advised to read the privacy policies of those sites or applications before sharing your information with, or connecting your Trackd
                            account to, any of these third party sites or applications.
                            </p>
                            <h2>
                            Cookies
                            </h2>
                            <p>
                            Information on how to block or disable cookies is included in our Cookies Policy. Further information is available at    <a href="http://aboutcookies.org/">http://aboutcookies.org</a>.
                            </p>
                            <h2>
                            Deleting your account
                            </h2>
                            <p>
                            You can delete your account by emailing us at privacy (at) tridentcloud.com. Please bear in mind that, if you delete your account, all data associated with
                            your account, including the songs that you have recorded and shared and the usage data associated with those songs, will be deleted and may not be
                            recoverable. The tracks you have recorded for other user’s songs will not be deleted. You are therefore advised to copy or back up all content recorded on
                            Trackd or uploaded to your account before you delete your account.
                            </p>
                            <p>
                            Even if you delete your Trackd account, it is possible that your information may still show up in some internet search results for a short while
                            afterwards, if the search engine maintains a temporary cache of web pages. Search engines' caching processes are outside of Trident Cloud’s control and
                            therefore we cannot be responsible for any information that remains cached by search engines after that information has been removed from the Platform.
                            </p>
                            <p>
                            Please note that deleting any of our Apps, or any third party apps to which your Trackd account is connected, will not delete your Trackd account. If you
                            wish to delete your account, you will need to do so by emailing us. Similarly, if you delete a third party app that is connected to your Trackd account
                            over our API, this will not necessarily delete all data from within that third party app. You will need to refer to the app provider’s terms of use and
                            privacy policy to find out how to delete your data from that third party app.
                            </p>
                            <h2>
                            Access to your data
                            </h2>
                            <p>
                            As described above, most of the personal data and other information you provide to us can be accessed and updated in the Profile page of your Trackd
                            account. If you wish to access, amend or delete any other personal data we hold about you, or if you have any objection to the processing of any personal
                            data that we hold about you, please contact us at privacy (at) tridentcloud.com or the address provided below.
                            </p>
                            <p>
                            If you ask us to delete your account, we will do so within a reasonable period of time, but we may need to retain some of your personal data in order to
                            satisfy our legal obligations or where we have a legitimate reason for doing so.
                            </p>
                            <h2>
                            International data transfers
                            </h2>
                            <p>
                            If you are using the Platform from outside the United States, please be aware that your information may be transferred to, stored, and processed in the
                            United States where our servers are located and our central database is operated. You should be aware that the data protection and privacy laws in the
                            United States may not be equivalent to the laws in your country, and by using the Platform, you consent to the transfer, storage and processing of your
                            personal data in the United States in accordance with this Privacy Policy and applicable law.
                            </p>
                            <h2>
                            Children
                            </h2>
                            <p>
                            Trackd is not intended for use by children. Anyone under the age of 13 is not permitted to use the Platform and must not attempt to register an account or
                            submit any personal information to us. We do not knowingly collect any personal information from any person who is under the age of 13 or allow them to
                            register an account. If it comes to our attention that we have collected personal data from a person under the age of 13, we will delete this information
                            as quickly as possible. If you have reason to believe that we may have collected any such personal data, please notify us immediately at privacy (at)
                            tridentcloud.com.
                            </p>
                            <h2>
                            Changes and updates to this Privacy Policy
                            </h2>
                            <p>
                            We may occasionally update this Privacy Policy, and when we do so, we will also revise the Effective Date set out below. Any changes to our Privacy Policy
                            will always be available here so that Trackd users are always aware of what information we gather, and how we might use and share that information. Please
                            be sure to check back here from time to time to ensure that you are aware of any changes to this Privacy Policy. Any material changes to this Privacy
                            Policy will be communicated to registered users by a notification to their account, by email notification, or by posting a notice of the change on the
                            Website or App.
                            </p>
                            <h2>
                            Questions?
                            </h2>
                            <p>
                            If you have questions about this Privacy Policy, want to suggest changes to this Privacy Policy or want to know, what information we store about you,
                            please contact us by email at privacy (at) tridentcloud.com, or write to us at:
                            </p>
                            <p>
                            Trident Cloud Limited, Richmond House, Walkern Road, Stevenage. Hertfordshire. SG1 3QP, United Kingdom.
                            </p>
                            <p>
                            Attention: Legal Department
                            </p>
                            <h2>
                            Don’t want to give us your information?
                            </h2>
                            <p>
                            If you decide that you do not want us to use your information in the manner described in the Privacy Policy (including our Cookies Policy), please do not
                            use the Platform. If you have already registered an account, you can delete your account by emailing us at privacy (at) tridentcloud.com.
                            </p>
                            <p>
                            Last amended: 28 September 2020
                            </p>
                            </div>


                            <div id="creator-terms">	

                            <h2>
                                Being a creator
                            </h2>

                            <p>
                                A Creator is someone who creates a membership page on Trackd to engage with Supporters who have purchased memberships from Trackd to support the Creator’s creations. 
                            </p>

                            <p>
                                There are a lot of details below involving payments, fees, taxes and restrictions that you should read in full if you are a Creator.
                            </p>

                            <h2>
                                Membership
                            </h2>

                            <p>
                            To become a Creator, simply create your Profile Page to start your membership. When you join Trackd, you become part of the Trackd community. You can use creator tools that Trackd provides, showcase your creations and receive recurring revenue from your Supporters. Memberships are for your most passionate fans. On Trackd, you can provide your Supporters something exciting that gives them unique benefits they want, like additional access, exclusivity, and engaging experiences. In turn, you will receive loyal support from your Supporters and recurring revenues direct to you.
                            </p>

                            <h2>
                                Payments
                            </h2>
                            
                            <p>
                            As a Creator you make your membership available on Trackd, and we provide membership to your Supporters on a subscription basis. In conjunction with our payment partner, <a href="https://stripe.com" target="_blank">Stripe</a>, we also handle payments issues such as fraud, chargebacks and resolution of payments disputes. We try to provide timely access to your funds, but you may occasionally experience delays in accessing your funds. We may also block or hold payments for violations of our policies or for compliance reasons, including collecting tax reporting information. When payments are delayed or blocked we try to communicate the reason to you promptly. If you have questions about a payments block, please contact us at finance[at]trackdmusic.com . In order to protect Creators, we may block Supporters’ payments if we believe them to be fraudulent. Sometimes activities like refunds can put your account balance into the negative. If your balance becomes negative then we reserve the right to recover those funds from future payments.
                            </p>


                            <h2>
                                Fees
                            </h2>
                            
                            <p>
                                As a Creator there are two options with your membership on Trackd. The first is the ChipIn+ platform fee; the second is the payment processing fee, which is dependent on the currency selected by the creator.
                            </p>

                            <p>
                                <ul>
                                    <li>The ChipIn+ fee is 12%</li>
                                    <li>The payment processing fee in US Dollars is 2.9% plus $0.30 per successful payment over $3, and 5% fee plus $0.10 per successful payment of $3 or less.</li>
                                    <li>The payment processing fee in Euro is 3.4% plus €0.35 per payment over €3, and 5% fee plus €0.15 per successful payment of €3 or less.</li>
                                    <li>The payment processing fee in British Pounds is 3.4% plus £0.35 per successful payment over £3, and 5% fee plus £0.15 per successful payment of £3 or less.</li>
                                    <li>The payment processing fee in Canadian Dollars is 3.2% plus CA$0.35 per successful payment over CA$3, and 5% fee plus CA$0.10 per successful payment of CA$3 or less.</li>
                                    <li>The payment processing fee in Australian Dollars is 3.0% plus AU$0.30 per successful payment over AU$3, and 5% fee plus AU$0.10 per successful payment of AU$3 or less.</li>
                                </ul>
                            </p>

                            <p>
                                You can see how much processing fees are for any membership subscription on your dashboard. Depending on your Supporters’ locations, some banks may charge your Supporter a foreign transaction fee for their membership subscription. Trackd does not control this charge, but it is typically around 3.0% .
                            </p>

                            <h2>
                                Tax
                            </h2>
                            
                            <p>
                                We collect tax identification information and report this to tax authorities as legally required. You are responsible for reporting any income or withholding taxes which may be due as a result of payments received. We are additionally responsible for a number of transactional taxes across the world. These include but are not limited to VAT on payments for electronically supplied services to Creators in the EU, GST as an operator of an electronic distribution platform (EDP) within Australia, and state sales tax as a result of ‘marketplace laws’ within the United States. For the purpose of electronically-supplied services, Creators make a direct supply of those services to their Supporters.
                            </p>

                            </div>


                            <div id="supporter-terms">	

                            <h2>
                                Being a Supporter
                            </h2>

                            <p>
                                A Supporter is someone who agrees to support their favorite Creators’ creations through Trackd.
                            </p>

                            <p>
                                Through membership on Trackd, Fans can choose to directly interact with Creators they support, using tools supplied by Trackd, and through our platform have the opportunity to engage with a greater community of Supporters and Creators.
                            </p>

                            <p>
                                As a Supporter, you’re joining Trackd to be part of an exciting movement to support a Creator’s membership while you get special benefits, like direct access to your creator, exclusivity, and engaging experiences with the Creator and Supporter community. In exchange, you pay Creators on a subscription basis, to access and support Creators you like. To become a Supporter, simply create an account, add your preferred payment method, and start supporting your Creators of choice! 
                            </p>

                            <p>
                                You can support your Creators by paying per month or annually, where you pay for a year of access up front, at a discounted rate. Your options will be presented to you in the payment flow. The timing and amount of each membership subscription depends on the type of membership agreement you enter into, and the Creator you support. You can see the details as you join, as well as in the receipt sent to you after each successful payment. You can view all your active membership subscriptions and billing history on your profile page. You may cancel your membership payments at any time. Terminating membership will go into effect in the subsequent (not current) payment term. For monthly or per creation payments, canceling your support may result in your loss of access to a Creator’s content and benefits. These include when you cancel your Supporter subscription, your payment method fails, the Creator blocks you, or the Creator deletes their account. We are not required to allow you to be a Supporter of any particular Creator. Creators’ memberships vary and we have limited control over the quality and specific offerings. We attempt to screen for fraudulent Creator pages, but cannot guarantee the identity of Creators or the validity of any claims they make. We appreciate your help reporting suspicious Creator profiles so we can keep Trackd safe. Please contact us as support[at]trackdmusic.com.
                            </p>

                            <p>
                                If you are located in the jurisdiction in which we are required to charge and collect tax (e.g. VAT or, sales tax), then this tax is added to the total charge. Except in limited circumstances, this tax is shown when you set up the initial membership subscription. Trackd remits all tax collected to the applicable taxing authority. As tax is largely dependant on your location, you are responsible for keeping your address complete and up to date. Depending on your location, some banks may charge you a foreign transaction fee for your membership subscription. Trackd does not control this charge, but it is typically around 3% . Please contact your bank for more information. Refunds. Our policy is No Refunds, though we will allow for some exceptions where refunds are granted in our sole discretion.
                            </p>

                            </div>


                            <div id="community-guidelines">
                            <h2>
                            Community Guidelines
                            </h2>
                            <p>
                            These Community Guidelines are designed to ensure that everyone understands what the Trackd® community is all about. Don't forget that your use is also subject to our Terms of Use.
                            </p>
                            <h2>
                            Do:
                            </h2>
                            <p>
                            • Respect others
                            </p>
                            <p>
                            Trackd users are a perse group with a lot of different opinions and views. That's great, but it means that everybody needs to be tolerant and respect
                            people whose ideas are different to their own. Of course, if you feel that someone is expressing views or opinions that are offensive, defamatory, abusive,
                            or otherwise contrary to our Terms of Use, you can let us know by sending an email to hello (at) tridentcloud.com.
                            </p>
                            <p>
                            • Create, upload and share
                            </p>
                            <p>
                            Trackd enables you to express yourself through your sounds, and lets you share those sounds across the web. So, be creative, be expressive and let the
                            world know how awesome you are. But remember – only share sounds that you have created yourself and have permission to share. If you are unsure whether you
                            can upload something, check out our Copyright Information pages.
                            </p>
                            <p>
                            • Give us a link
                            </p>
                            <p>
                            Our tools enable you to take tracks from Trackd and share them elsewhere. This is really great, but we're picking up the bandwidth bill each month, so we’d
                            really appreciate it if you could link back to us whenever you post Trackd hosted content elsewhere on the web.
                            </p>
                            <p>
                            • Criticize, but do it constructively
                            </p>
                            <p>
                            Criticism can be really valuable, but only when it’s done constructively. So, please share your opinions, but before posting anything, ask yourself "Would
                            I appreciate receiving the same comment?".
                            </p>
                            <h2>Don't:</h2>
                            <p>
                            • Upload things that aren't yours to upload
                            </p>
                            <p>
                            Uploading and sharing means you must always be 100% certain that you are the creator of what you're uploading, or have permission from all relevant rights
                            holders. Anyone who repeatedly uploads other people’s content risks having their account suspended or terminated. If you need more information about
                            copyright, check out our Copyright Information pages.
                            </p>
                            <p>
                            • Use someone else’s name
                            </p>
                            <p>
                            Trackd usernames are allocated on a first come, first served basis. Please don’t register accounts in the name of another person, or using someone else’s
                            trademark, even if this is meant as a tribute. If you feel that someone is impersonating you on Trackd, or is infringing your trademark, you can tell us
                            about it by sending an email to legal (at) tridentcloud.com
                            </p>
                            <p>
                            • Rant, flame, troll or be an asshole
                            </p>
                            <p>
                            Trackd is a social place but it's not the place for you to act out rage from other parts of your life. Don't let a personal issue strain the rest of the
                            community. Inappropriate behaviour, including abusive, defamatory, obscene, racist or offensive comments, will put you at risk of having your account
                            suspended or terminated.
                            </p>
                            <p>
                            • Spam
                            </p>
                            <p>
                            There’s a fine line between promoting your sounds and spamming
                            </p>
                            <p>
                            The more you can make your messages and actions personal and relevant, the less likely you are to be reported for spam. Faking your own popularity, or
                            using sounds or comments to promote other products or services can be considered as spam and isn’t welcome on Trackd.
                            </p>
                            <p>
                            <br>
                            </p>
                            <h2>
                            If you break these rules
                            </h2>
                            <p>
                            We take these rules seriously, and expect you to as well. If you break these rules we will take action. If we receive notification from a rights holder
                            that any sounds, text or images in your account infringe their copyright, or if we believe that your behaviour is inappropriate, we will send you a
                            warning. If we have to send you more than two of these warnings, we will suspend your account. In the most extreme cases, we may suspend your account
                            without warning.
                            </p>
                            <p>
                            <br>
                            </p>
                            <h2>
                            Tell us about it
                            </h2>
                            <p>
                            If you feel that someone is infringing your copyright, you can tell us about it sending an email to legal (at) tridentcloud.com
                            </p>
                            <p>
                            If you want to report any other breaches of these Guidelines or our Terms of Use – including offensive or defamatory comments, trade mark infringement,
                            impersonation, stalking, harassment, breach of privacy or spamming - you can report this to us by sending an e-mailing to hello (at) tridentcloud.com.
                            </p>
                            <p>
                            Remember, we want Trackd to be a community where everyone feels comfortable and respected - it’s up to all of us to make sure this happens.
                            </p>
                            <p>
                            <br>
                            </p>
                            <h2>
                            To Sum It Up
                            </h2>
                            <p>
                            Basically, be nice, respect the law and think before you post. In most cases, we'll send you a warning before we take other measures and we'll always try
                            to act reasonably. We think this is fair but if you don't agree, maybe Trackd is not the place for you.
                            </p>
                            <p>
                            <br>
                            </p>
                            <p>
                            These guidelines have been written down to ensure that everyone within the community has the experience they want. We're not trying to set up rules and
                            regulations for exactly how you should and shouldn't act but rather to make clear that this should be a place of respect between people and a place for
                            responsible content posting. We hope you agree and understand. If you do, don't or have any other questions or comments please send us an email to hello
                            (at) tridentcloud.com.
                            </p>
                            <p>
                            We may change these Community Guidelines from time to time, so please be sure to check back here every so often for any updates.
                            </p>
                            <p>
                            <br>
                            </p>
                            <b>
                            The Trackd Team
                            </b>
                            <p>
                            <br>
                            </p>
                            </div>


                            <div id="cookies-policy">
                            <h2>
                            Trident Cloud® and Trackd® Cookies Policy
                            </h2>
                            <p>
                            This Cookies Policy forms part of our general Privacy Policy. You can read the full Privacy Policy.
                            </p>
                            <p>
                            In common with most other websites, we use cookies and similar technologies to help us understand how people use Trident Cloud and Trackd so that we can
                            keep improving our Platform. We have created this Cookies Policy to provide you with clear and explicit information about the technologies that we use and
                            your choices when it comes to these technologies.
                            </p>
                            <p>
                            If you choose to use the Platform without blocking or disabling cookies or opting out of other technologies, you indicate your consent to our use of these
                            cookies and other technologies and to our use (in accordance with this policy and the rest of our Privacy Policy) of any personal information that we
                            collect using these technologies. If you do not consent to the use of these technologies, please be sure to block or disable them using your browser
                            settings, the opt-out links identified in this policy, or the settings within your mobile device.
                            </p>
                            <h2>
                            What are cookies?
                            </h2>
                            <p>
                            Cookies are small text files that are placed on your computer by websites that you visit. These text files can be read by these websites and help to
                            identify you when you return to a website. Cookies can be “persistent” or “session” cookies. Persistent cookies remain on your computer when you have gone
                            offline, while session cookies are deleted as soon as you close your web browser.
                            </p>
                            <p>
                            To find out more about cookies, including how to see what cookies have been set and how to block and delete cookies, please visit    <a href="http://www.aboutcookies.org/">http://www.aboutcookies.org/</a>.
                            </p>
                            <h2>
                            Our Cookies
                            </h2>
                            <p>
                            We use our own cookies to recognise you when you visit our website or use our apps. This means that you don’t have to log in each time you visit, and we
                            can remember your preferences and settings.
                            </p>
                            <p>
                            Those cookies with one- or two-letter names (such as “a”, “c” or “qc”) are our cookies.
                            </p>
                            <h2>
                            Third Party Cookies
                            </h2>
                            <p>
                            In addition to our own cookies, we work with various reputable companies to help us analyse how the Platform is used, and to optimise our Website and Apps
                            to deliver the best possible experience. The following companies help us achieve this through use of cookies:
                            </p>
                            <h2>
                            Google Analytics and Google Website Optimizer
                            </h2>
                            <p>
                            Google Analytics and Google Website Optimizer are services provided by Google, Inc. (“Google”). Google Analytics uses cookies to help us analyze how users
                            use our website and our mobile site. Google Web Optimizer uses the same cookies to measure how different users respond to different content. The
                            information generated by these cookies (including your truncated IP address) is transmitted to and stored by Google on servers in the United States. Google
                            will use this information for the purpose of evaluating your, and other users’, use of our website, mobile site and compiling reports for us on website
                            activity and providing other services relating to website activity and Internet usage. Please note that Google only receives your truncated IP address.
                            This is sufficient for Google to identify (approximately) the country from which you are visiting our sites or accessing our players, but is not sufficient
                            to identify you, or your computer or mobile device, individually.
                            </p>
                            <p>
                            Google cookies are those beginning “__ut”.
                            </p>
                            <p>
                            You can find more information <a href="http://www.google.com/analytics/learn/privacy.html">here</a>, including a link to    <a href="http://www.google.com/intl/en/policies/privacy/">Google’s privacy policy</a>.
                            </p>
                            <p>
                            To opt out of this analysis by Google, please see the Opting Out section below.
                            </p>
                            <h2>
                            Google AdWords and Google Remarketing
                            </h2>
                            <p>
                            We use the online advertising program Google AdWords and the Google Remarketing technology, both operated by the company Google Inc. ("Google") .
                            </p>
                            <p>
                            For measuring conversion with Google AdWords, a conversion tracking cookie is placed when a user clicks on a Trackd advertisement delivered by Google
                            (“Ads”). Conversion tracking cookies expire after 30 days and are not used for personal identification. Google uses a different cookie for each Google
                            AdWords customer and there is no consolidation of the cookie data with other data. If you click on one of our Ads and proceed to a page equipped with a
                            conversion tag and the cookie has not yet expired, the conversion is documented. With the help of the conversion tracking cookie we see the total number of
                            conversions and are able to review the performance of our Ads. You can find more information about Google AdWords    <a href="https://support.google.com/adwords/topic/3121763?hl=en&amp;ref_topic=3119071">here</a>.
                            </p>
                            <p>
                            When you click on one of our Ads, a Google Remarketing cookie is placed. This cookie helps to serve our Ads to you at a later time when you browse pages of
                            the Google content network. Remarketing cookies expire after 30 days and are not used for personal identification. For more information on Google
                            Remarketing, please see <a href="http://www.google.com/ads/innovations/remarketing.html">here</a>.
                            </p>
                            <p>
                            Google cookies are those beginning “__ut”.
                            </p>
                            <p>
                            To opt out of personalized ad serving by Google, please see the Opting Out section below.
                            </p>
                            <h2>
                            DoubleClick
                            </h2>
                            <p>
                            We also use DoubleClick, an ad serving service operated by Google Ireland Limited (“Google Ireland”). Google Ireland uses cookies in order to facilitate to
                            show relevant and interesting ads to you. When you interact with our Platform your browser automatically makes information available to Google Ireland on
                            our behalf, including your IP-address. This information about your use of the Platform will solely be used to create pseudonym profiles based on your
                            interests. These enable us to display more appealing advertising to you. You can find more information on Double Click cookies    <a href="http://www.google.com/policies/technologies/ads/">here</a>. If you wish to opt out of personalized ad serving by Google Ireland, please see the
                            Opting Out section below.
                            </p>
                            <p>
                            Please be aware that even if you opt out of interest-based ads, you may still see ads based on factors such as your general location derived from your
                            current IP-address, your browser type and recent, previous searches related to your current search.
                            </p>
                            <h2>
                            Ontraport
                            </h2>
                            <p>
                            Ontraport is a hosted Customer Relationship Management Software service provided by Ontraport Incorporated (“Ontraport”). Ontraport uses cookies to help us
                            better understand our users, and to help us keep Trackd and our marketing messages relevant to your use of the Platform. The information generated by the
                            cookie about your use of the Website (including your IP address) is transmitted to and stored by Ontraport on servers in the United States. Ontraport will
                            use this information, together with information it collects from other websites that you may visit, for the purpose of evaluating your behaviour across the
                            web and compiling reports for us on website activity. All information provided by Ontraport is aggregated and Ontraport does not provide us with any
                            information relating to your activity on any other website.
                            </p>
                            <p>
                            You can find more information on Ontraport’s collection and use of data <a href="https://ontraport.com/legal-terms/">here</a>, including a link to    <a href="https://ontraport.com/legal-privacy/">Ontraport’s privacy policy</a>.
                            </p>
                            <p>
                            To opt out of this analysis by Ontraport, please see the Opting Out section below.
                            </p>
                            <h2>
                            Flurry Analytics
                            </h2>
                            <p>
                            Flurry Analytics is an audience measurement service provided by Yahoo Corporation (“Flurry”). Flurry uses cookies to help us better understand our users,
                            and to help us keep Trackd and our marketing messages relevant to your use of the Platform. The information generated by the cookie about your use of the
                            Website (including your IP address) is transmitted to and stored by Flurry on servers in the United States. Flurry will use this information, together with
                            information it collects from other websites that you may visit, for the purpose of evaluating your behaviour across the web and compiling reports for us on
                            website activity. All information provided by Flurry is aggregated and Flurry does not provide us with any information relating to your activity on any
                            other website.
                            </p>
                            <p>
                            You can find more information on Flurry’s collection and use of data<a href="http://www.flurry.com/legal-privacy/terms-service/flurry-analytics-terms-service">here</a>, including a link to    <a href="https://info.yahoo.com/privacy/us/yahoo/">Yahoo’s privacy policy</a>.
                            </p>
                            <p>
                            To opt out of this analysis by Flurry, please see the Opting Out section below.
                            </p>
                            <h2>
                            Similar Technologies
                            </h2>
                            <p>
                            In addition to cookies, we also use the following standard Internet technologies in connection with your use of the Platform:
                            </p>
                            <p>
                            • Clear GIFs: We use “clear GIFs”, sometimes known as “web bugs”, which are small image files that we embed into our email newsletters. These clear GIFs
                            tell us whether you opened the newsletter, clicked on any of the content or forwarded the newsletter to someone else. This provides us with useful
                            information regarding the effectiveness of our email newsletters, which we can use to ensure that we are delivering information that is relevant to our
                            users.
                            </p>
                            <p>
                            • HTML5 local storage: We use HTML5 local storage to store your default listening volume (i.e. the volume at which you prefer to hear sounds on Trackd). If
                            you access the mobile version of our website, we use HTML5 local storage to store certain cookie data, including your user plan, authentication data, your
                            username and your display preferences. This information helps us to suggest content that you might enjoy when you visit the Platform without being logged
                            in or when you sign up for a Trackd account. Depending on your browser you can remove local storage when clearing your cache and cookies. We do not use
                            HTML5 local storage to collect any personal data.
                            </p>
                            <p>
                            • Activity tracking: We work with Localytics, a service provided by Char Software, Inc ("Localytics") to collect usage data from our mobile apps in order
                            to help us understand how users are interacting with our apps. Localytics is used to track activities within the app such as likes, follows and plays. This
                            information, including your IP address, is transmitted and stored by Localytics on servers in the United States. For more information see    <a href="http://www.localytics.com/privacy-policy/">Localytics' privacy policy</a>. If you wish to opt out of Localytics tracking, please see the Opting
                            Out section below.
                            </p>
                            <p>
                            • App performance tracking: Our mobile apps use the app performance and analysis technology “adjust.io”, a service provided by Adjust GmbH ("Adjust"). When
                            you launch the Trackd app, Adjust collects install and event data such as the number of songs played and the listening time from our mobile apps in order
                            to help us understand how our users are interacting with our apps and to optimise and analyse mobile ad campaigns. For such analysis, Adjust uses your
                            anonymized (hashed) ID, and your anonymized (hashed) IP- and MAC address. The hashes used are one-way hashes and it is not possible to identify you or your
                            mobile device individually. If you wish to opt-out of Adjust tracking, please see the Opting Out section below.
                            </p>
                            <p>
                            • Bug reporting: We work with Crashlytics, Inc (“Crashlytics”) to report any bug affecting our mobile apps. If either app crashes during normal use, the
                            app will send certain information about the incident to Crashlytics as applicable. This information consists of the device type, OS version and certain
                            hardware information about your mobile device, and the time of the crash, the state of the application at the time of the crash, and stack traces. The
                            information does not include your IP address or any other information that could be used to identify you or your mobile device individually, and does not
                            include any other information from your mobile device. Click <a href="http://try.crashlytics.com/terms/">here</a> to review Crashlytics' privacy policy. To
                            opt out of bug reporting please see the Opting Out section below.
                            </p>
                            <p>
                            • Personalized advertising on mobile devices: Where cookie technology is not available other unique identifiers may be used instead (e.g. in mobile
                            applications), which perform similar functions. To opt-out of identifiers on mobile, please see the Opting Out section below.
                            </p>
                            <h2>
                            Opting Out
                            </h2>
                            <p>
                            We think it’s important that you are able to control the collection of personal data relating to your use of Trident Cloud and Trackd, and have therefore
                            made sure that you can opt out of any personal data collection using cookies or other technologies as set out below. (Please note that you cannot opt out
                            of HTML5 local storage as this is necessary for the technical operation of the platform. However, we do not use these technologies to collect any personal
                            data.)
                            </p>
                            <p>
                            Cookies:
                            </p>
                            <p>
                            You can use the settings within your browser to control the cookies that are set on your computer or mobile device. However, please be aware that cookies
                            are important to many aspects for the Platform – if you set your browser to reject cookies, you may not be able to enjoy all of the features of the
                            Platform. To find out how to see what cookies have been set and how to reject and delete cookies, please visit    <a href="http://www.aboutcookies.org/">http://www.aboutcookies.org</a>.
                            </p>
                            <p>
                            • To opt-out of analysis by Google Analytics on our website and other websites, please visit    <a href="http://tools.google.com/dlpage/gaoptout">http://tools.google.com/dlpage/gaoptout</a>.
                            </p>
                            <p>
                            • To opt-out of personalized ad delivery on the Google content network, please visit    <a href="http://www.google.com/ads/preferences">Google’s Ads Preferences Manager</a> or if you wish to opt-out permanently even when all cookies are
                            deleted from your browser you can install their plugin <a href="https://www.google.com/settings/ads/plugin/">here</a>.
                            </p>
                            <p>
                            • You can also disable analytics for mobile apps from the settings screen on your mobile device.
                            </p>
                            <p>
                            • You can also manage many companies’ cookies used for online advertising at the US-based aboutads.info choices    <a href="http://www.aboutads.info/choices/">page</a> or the EU-based <a href="http://www.youronlinechoices.com/uk/your-ad-choices">Your Online Choices</a>.
                            Or you may choose to change your browser settings to opt-out of cookies.
                            </p>
                            <p>
                            • To opt out of interest-based ads on mobile devices, please follow these instructions for your mobile device: On Android open the Google Settings app on
                            your device and select “ads” to control the settings. On iOS devices with iOS 6 and above use Apple’s advertising identifier. To learn more about limiting
                            ad tracking using this identifier, visit the settings menu on your device.
                            </p>
                            <p>
                            • To opt-out of location tracking when using our apps, you can use the settings of your device.
                            </p>
                            <p>
                            Clear GIFs:
                            </p>
                            <p>
                            Clear GIFs are included in our email newsletters. You can unsubscribe from our newsletters at any time by following the link in the newsletter itself.
                            </p>
                            <p>
                            Activity Tracking and Bug Reporting:
                            </p>
                            <p>
                            You can use the settings within your device to opt-out of analytics tracking and bug reporting. For the opt-out, if you are using our iOS app, go to the
                            settings of your iOS device and open the Trackd tab.
                            </p>
                            <p>
                            Consent to Cookies and Similar Technologies:
                            </p>
                            <p>
                            We have done our best to provide you with clear and comprehensive information about our use of cookies and similar technologies. If you choose to use the
                            Platform without blocking or disabling cookies or opting out of these technologies (as described above), you will indicate your consent to our use of these
                            cookies and other technologies and to our use (in accordance with this policy and our Privacy Policy) of any personal information that we collect using
                            these technologies. If you do not consent to the use of these technologies, please be sure to block or disable them using your browser settings, the
                            opt-out links above, or the settings on your mobile device.
                            </p>
                            <p>
                            Last amended: 21 May 2018
                            </p>
                            </div>


                            <div id="copyright-guidelines">
                            <h2>
                                Learn about Copyright
                            </h2>
                            <p>
                                Trident Cloud® provides Trackd® as a platform for creators and we expect all users to respect other people’s copyright.
                            </p>
                            <p>
                                • What is copyright?
                            </p>
                            <p>
                                • What is copyright infringement and how can I avoid it?
                            </p>
                            <p>
                                • Copyright Checklist
                            </p>
                            <p>
                                • Further resources
                            </p>
                            <p>
                                Please note: This page provides some basic information about copyright. However, nothing on this page constitutes legal advice – please do not treat it as
                                legal advice or as a substitute for legal advice. Please consult a suitably qualified lawyer on any matters related to copyright.
                            </p>
                            <h2>
                                What is copyright?
                            </h2>
                            <p>
                                “Copyright” is the term used to describe a number of legal rights that exist in original literary, musical, dramatic or artistic works, and in sound
                                recordings, films, broadcasts and other creative works. Under copyright laws, these rights are exclusive to the copyright owner, and enable the copyright
                                owner to control how their work is used and to prevent unauthorised use.
                            </p>
                            <p>
                                Originally, copyright laws allowed the creator of a work to prevent that work from being copied, but copyright laws have gradually been extended over time,
                                and now allow copyright owners to prevent and control things like adaptation or public performance of the copyright work, inclusion of the work in a
                                broadcast, or distribution of the work both physically and on the Internet. Because these rights are exclusive to the copyright owner, anyone wanting to do
                                any of these things needs the permission of the copyright owner.
                            </p>
                            <p>
                                Copyright can exist in all sorts of things - for example, music, lyrics, photographs, artwork, books, speeches, TV programmes and movies. Also, what might
                                appear to be a single work can include several different copyrights owned by various different people. For example, a music track by a signed artist will
                                often include separate copyrights in the composition, the lyrics, and the sound recording. Copyright in the music and lyrics will usually be owned by the
                                artist or music publishing company, and copyright in the sound recording will usually be owned by the artist’s record label. Use of that track, including
                                any adaptation of the track or any uploading or sharing over the Internet, will require the permission of all of these copyright owners, either directly or
                                through their representatives (for example, through a collecting society or performing rights organisation).
                            </p>
                            <h2>
                                What is copyright infringement, and how can I avoid it?
                            </h2>
                            <p>
                                Because the rights afforded by copyright law are exclusive to the copyright owner(s), you will infringe copyright if you do any of those things without the
                                permission of the copyright owner(s) - for example, if you copy or adapt a copyright work, or make it available on the Internet.
                            </p>
                            <p>
                                The best way to avoid copyright infringement is to ensure that you don’t use anything created by anyone else. Simple as that.
                            </p>
                            <p>
                                If you do use someone else's work, make sure you have the necessary permissions – this will usually take the form of a licence from the copyright owner(s),
                                which you may have to pay for. There are certain instances where you may be able to use excerpts of copyrighted material without a licence – for example,
                                if you use a small part of someone else's work for the purposes of criticism or review, or if your use constitutes "fair use" under applicable law
                                (particularly U.S. law) – however, discussion of these exceptions is beyond the scope of this guidance. If you intend to use any part of a copyright work
                                in reliance on any of the statutory exceptions, you should seek legal advice first.
                            </p>
                            <h2>
                                Copyright Checklist
                            </h2>
                            <p>
                                Copyright is complicated. If you have any doubt regarding the extent of your rights in any sounds, you should consult with a suitably qualified lawyer
                                before uploading anything to Trackd or making any claims or counter-claims regarding your rights. However, as a general guide, here are some of the issues
                                you might want to consider before uploading anything to Trackd:
                            </p>
                            <p>
                                For music uploads:
                            </p>
                            <p>
                                Can you answer “yes” to all of the following questions?
                            </p>
                            <p>
                                • Did you compose the music yourself?
                            </p>
                            <p>
                                • Did you write the lyrics yourself?
                            </p>
                            <p>
                                • Did you record and produce the track yourself or do you have permission from the producer or record label that made the recording?
                            </p>
                            <p>
                                • Do you have written permission from all copyright owners to use any samples contained in the track?
                            </p>
                            <p>
                                Can you answer “no” to all of the following questions?
                            </p>
                            <p>
                                • Were you signed to a record label when you recorded the track?
                            </p>
                            <p>
                                • Do you have a publishing deal?
                            </p>
                            <p>
                                • Are you a member of a performing rights organization or collecting society?
                            </p>
                            <p>
                                • Have you licensed your track to anyone else?
                            </p>
                            <p>
                                • Does the track contain the entirety or any part of someone else's song(s) Is it based on someone else’s song(s)?
                            </p>
                            <p>
                                For other sounds, including field recordings, podcasts, audiobooks or voice messages:
                            </p>
                            <p>
                                Can you answer “yes” to all of the following questions?
                            </p>
                            <p>
                                • Is the recording spontaneous, as opposed to being recited from a script, play or book (other than one written by you)?
                            </p>
                            <p>
                                • Is it a recording of your performance?
                            </p>
                            <p>
                                • Did you make the recording yourself?
                            </p>
                            <p>
                                • Do you have the permission of anyone else appearing in the recording to upload and share the recording on Trackd?
                            </p>
                            <p>
                                Can you answer “no” to all of the following questions?
                            </p>
                            <p>
                                • Is the recording rehearsed or recited from a script, play or book (other than one written by you)?
                            </p>
                            <p>
                                • Does the recording contain any music or excerpts from other copyright works (e.g. movie dialogue)?
                            </p>
                            <h2>
                                Further resources
                            </h2>
                            <p>
                                For information about copyright in your country, try your local copyright office:
                            </p>
                            <p>
                                <a href="http://www.wipo.int/directory/en/urls.jsp">http://www.wipo.int/directory/en/urls.jsp</a>
                            </p>
                            <p>
                                For information on copyright laws around the world, try the World Intellectual Property Office database:
                            </p>
                            <p>
                                <a href="http://www.wipo.int/wipolex/en/">http://www.wipo.int/wipolex/en/</a>
                            </p>
                            </div>


                            <div id="copyright-policy">
                            <h2>
                                Trident Cloud Copyright Policy
                            </h2>
                            <p>
                            Trident Cloud® provides Trackd® as a platform for creators, and we expect all users to respect other people’s copyright. As set forth in detail in our    <a href="#terms-of-use">Terms of Use</a>, each Trackd user is responsible for ensuring that the tracks
                                recorded, uploaded and shared via Trackd do not infringe any third party copyright or other intellectual property right.
                            </p>
                            <p>
                                For more information about copyright and some guidelines for determining whether your content may be infringing, please read our <a href="#community-guidelines">Copyright Guidelines</a>.
                            </p>
                            <p>
                            Trident Cloud will promptly remove or disable materials from Trackd in accordance with the Digital Millenium Copyright Act (17 U.S.C. 512) (“DMCA”) if notified in accordance with the requirements below that the materials infringe a
                                third party’s copyright. Whether or not Trident Cloud disables access to or removes materials, Trident Cloud may attempt to forward the written
                                notification, including the complainant’s contact information, to the user who posted the content and/or take other reasonable steps to notify the user
                                that Trident Cloud has received notice of an alleged violation of intellectual property rights or other violation. Trident Cloud may also, in its
                                discretion, terminate the accounts of repeat copyright infringers or of those who post inaccurate or unlawful content.
                            </p>
                            <p>
                                Any notice or counter-notice you submit must be truthful and submitted under penalty of perjury. A false notice or counter-notice may give rise to personal
                                liability. You may want to seek the advice of legal counsel before submitted a notice or a counter-notice.
                            </p>
                            <p>
                            The claim procedure below is for copyright infringement. If you believe materials on Trackd violate other rights, please email details to    <a href="mailto:legal@tridentcloud.com">legal[at]tridentcloud.com</a>.
                            </p>
                            <p>
                                </p><h2>Claims Regarding Copyright Infringement</h2>
                            <p></p>
                            <p>
                                If you believe in good faith that your copyright has been infringed, please provide us with a written notice containing:
                            </p>
                            <p>
                                1. Your name, telephone number, address, e-mail address and Trackd username, if you have one;
                            </p>
                            <p>
                                2. A description of the copyrighted work that you claim has been infringed;
                            </p>
                            <p>
                                3. A description of the material on Trackd that you believe is infringing the copyrighted work and where such material may be found on Trackd (e.g., the
                                Trackd user name and song title);
                            </p>
                            <p>
                                4. A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
                            </p>
                            <p>
                                5. A statement by you, made under <u>penalty of perjury</u>, that the information in your notice is accurate and that you are the copyright owner or
                                authorized to act on the copyright owner’s behalf; and
                            </p>
                            <p>
                                6. Your electronic or physical signature.
                            </p>
                            <p>
                                Please submit your notice to Trident Cloud as follows:
                            </p>
                            <p>
                                Email: legal[at]tridentcloud.com
                            </p>
                            <p>
                                By mail: Trident Cloud Limited
                            </p>
                            <p>
                                Attn: Legal Department
                            </p>
                            <p>
                                Richmond House
                            </p>
                            <p>
                                Walkern Road
                            </p>
                            <p>
                                Stevenage
                            </p>
                            <p>
                                Hertfordshire
                            </p>
                            <p>
                                SG1 3QP
                            </p>
                            <p>
                                United Kingdom
                            </p>
                            <p>
                                </p><h2>Counter-Notice to Restore Removed Content</h2>
                            <p></p>
                            <p>
                                If you believe that a notice of copyright infringement has been improperly submitted against you, you may submit a Counter-Notice, pursuant to Sections
                                512(g)(2) and (3) of the DMCA by providing Trident Cloud with a written notice which contains:
                            </p>
                            <p>
                                1. Your name, telephone number, address, e-mail address and Trackd username;
                            </p>
                            <p>
                                2. Identification of the material removed from Trackd or to which access has been disabled;
                            </p>
                            <p>
                                3. A statement under <u>penalty of perjury</u> that you have a good faith belief that removal or disablement of the material was a mistake or that the
                                material was misidentified;
                            </p>
                            <p>
                                4. A statement that you consent to the jurisdiction of the Federal District court (i) in the judicial district where your address is located if the address
                            is in the United States, or (ii) if your address is located outside the United States, any judicial district in which Trident Cloud may be found (which includes the United States District Court for the Southern District of New York) and that you will accept service of process from the Complainant submitting the notice
                                or his/her authorized agent.
                            </p>
                            <p>
                                5. Your physical or electronic signature;
                            </p>
                            <p>
                                Please submit your counter-notice to Trident Cloud as follows:
                            </p>
                            <p>
                                Email: legal[at]tridentcloud.com
                            </p>
                            <p>
                                By mail: Trident Cloud Limited
                            </p>
                            <p>
                                Attn: Legal Department
                            </p>
                            <p>
                                Richmond House
                            </p>
                            <p>
                                Walkern Road
                            </p>
                            <p>
                                Stevenage
                            </p>
                            <p>
                                Hertfordshire
                            </p>
                            <p>
                                SG1 3QP
                            </p>
                            <p>
                                United Kingdom
                            </p>
                            <p>
                                </p><h2>More Information</h2>
                            <p></p>
                            <p>
                                If you have questions about the legal requirements of a DMCA notice, please contact an attorney or see Section 512(c)(3) of the U.S. Copyright Act, 17
                                U.S.C. § 512(c)(3), for more information. If you have questions about the legal requirements of a DMCA counter-notification, please contact an attorney or
                                see Section 512(g)(3) of the U.S. Copyright Act, 17 U.S.C. § 512(g)(3), for more information.
                            </p>
                            </div>


                        </div>
                    </b-col>
                </b-row>

            </div>
            
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "Legal",
        data () {
            return {
                sticky: true
            }
        },
        methods: {
            scrollTo: function (hashtag) {
            //console.log(location.href, ' : ', hashtag)
            setTimeout(() => { location.href = hashtag }, 1000)
            }
        },
        mounted() {
            // From testing, without a brief timeout, it won't work.
            if (this.$route.hash) {
            setTimeout(() => this.scrollTo(this.$route.hash), 1000)
            }
        }
    }
    
</script>

<style scoped>

    .image-backdrop {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    body {
        padding-top: 150px;
    }

    p, ul > li {
        font-size: 1.2em;
        font-weight: 200;
    }

    h2, h2, h3, h4, h5 {
        font-weight: 300;
    }

    strong {
        font-weight: 300;
    }
</style>