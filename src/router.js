import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

const Page404 = () => import("@/views/Page404");

const GoogleAuthCallback = () => import("@/views/auth/GoogleCallback");
const AppleAuthCallback = () => import("@/views/auth/AppleCallback");

const Campaign = () => import("@/views/Campaign");

// Onboarding
const OnboardingEmail = () => import("@/views/auth/onboarding/email/email");
const OnboardingEmailAccount = () =>
  import("@/views/auth/onboarding/email/account");
const OnboardingUsername = () => import("@/views/auth/onboarding/sso/username");
const OnboardingGenres = () => import("@/views/auth/onboarding/genres");
const OnboardingUserType = () => import("@/views/auth/onboarding/user_type");
const OnboardingSkills = () => import("@/views/auth/onboarding/skills");
const OnboardingLocation = () => import("@/views/auth/onboarding/location");
const OnboardingGenderDOB = () => import("@/views/auth/onboarding/gender_dob");

// Public
const Home = () => import("@/views/Home");
const ForArtists = () => import("@/views/ForArtists");
const TridentRecord = () => import("@/views/TridentRecord");
const Artist = () => import("@/views/Artist");
const Song = () => import("@/views/Song");
const ChipInSuccess = () => import("@/views/chipin/ChipInSuccess");
const ChipInCancel = () => import("@/views/chipin/ChipInCancel");
const AuthRedirect = () => import("@/views/AuthRedirect");

// Public Site Pages
const Support = () => import("@/views/pages/Support");
const Legal = () => import("@/views/pages/Legal");
const Company = () => import("@/views/pages/Company");
const OurStory = () => import("@/views/pages/OurStory");
const ChipIn = () => import("@/views/ChipIn");
const Landing = () => import("@/views/Landing");

// Authenticated / Account
const Songs = () => import("@/views/account/Songs");
const Upload = () => import("@/views/account/Upload");

// Settings

const AccountSettings = () =>
  import("@/views/account/settings/AccountSettings");
const EditAccountSettings = () =>
  import("@/views/account/settings/EditAccountSettings");
const EditUserProfile = () => import("@/views/account/settings/EditProfile");
const EditUserProfileSkills = () => import("@/views/account/settings/EditProfileSkills");
const EditSongProfile = () =>
  import("@/views/account/settings/EditSongProfile");
const EditSongProfileGenres = () => import("@/views/account/settings/EditSongProfileGenres");
const SetupChipIn = () => import("@/views/account/SetupChipIn");
const SignInSettings = () => import("@/views/account/settings/SignInSettings");
const ChangePassword = () => import("@/views/account/settings/ChangePassword");
const SongSettings = () => import("@/views/account/settings/SongSettings");
const Notifications = () => import("@/views/account/settings/Notifications");
const EmailSettings = () => import("@/views/account/settings/EmailSettings");
const PrivacySettings = () => import("@/views/account/settings/PrivacySettings");
const Credits = () => import("@/views/account/settings/Credits");

// ChipIn+

const ChipInAccountType = () =>
  import("@/views/account/settings/ChipInAccountType");
const ChipInPlusSettings = () =>
  import("@/views/account/settings/ChipInPlusSettings");
const ChipInPlusSongSettings = () =>
  import("@/views/account/settings/ChipInPlusSongSettings");

// Library
const LibraryArea = () => import("@/views/library/LibraryArea");
const LibrarySectionList = () => import("@/views/library/LibrarySectionList");
const LibrarySection = () => import("@/views/library/Section");
const LibrarySubSection = () => import("@/views/library/SubSection");
const SubSectionList = () => import("@/views/library/SubSectionList");

const Playlist = () => import("@/views/library/types/Playlist");
//const Location = () => import('@/views/library/types/Location')

// ChipIn Account
const ChipInAccount = () => import("@/views/account/chipin/Account");
//const ChipInPayments = () => import('@/views/account/chipin/Payments')
const ChipInTransactions = () => import("@/views/account/chipin/Transactions");
const ChipInSubscriptions = () =>
  import("@/views/account/chipin/Subscriptions");
const ChipInPayouts = () => import("@/views/account/chipin/Payouts");
const ChipInCards = () => import("@/views/account/chipin/card/Cards");
const ChipInAddCard = () => import("@/views/account/chipin/card/AddCard");
const ChipInBankAccounts = () =>
  import("@/views/account/chipin/bank_account/BankAccounts");
const ChipInAddBankAccount = () =>
  import("@/views/account/chipin/bank_account/AddBankAccount");
const SubscriptionsMade = () =>
    import("@/views/account/chipin/SubscriptionsMade");
const DonationsMade = () =>
      import("@/views/account/chipin/DonationsMade");

Vue.use(VueRouter);

function requireAuth(to, from, next) {
  if (store.state.accessToken || localStorage.getItem('accessToken')) {
    next();
  } else {
    if (to.path !== "/") {
      next("/");
      store.commit("Auth/setShowLoginModal", true);
    }

    next();
  }
}

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/auth",
      name: "AuthRedirect",
      component: AuthRedirect,
    },
    {
      path: "/landing",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/forartists",
      name: "ForArtists",
      component: ForArtists,
    },
    {
      path: "/campaign",
      name: "Campaign",
      component: Campaign,
    },
    {
      path: "/tridentrecords",
      name: "TridentRecord",
      component: TridentRecord,
    },
    {
      path: "/auth/google",
      name: "GoogleAuthCallback",
      component: GoogleAuthCallback,
    },
    {
      path: "/auth/apple",
      name: "AppleAuthCallback",
      component: AppleAuthCallback,
    },
    // Onboarding
    {
      path: "/onboarding/email",
      name: "OnboardingEmail",
      component: OnboardingEmail,
    },
    {
      path: "/onboarding/username",
      name: "OnboardingUsername",
      component: OnboardingUsername,
    },
    {
      path: "/onboarding/genres",
      name: "OnboardingGenres",
      component: OnboardingGenres,
    },
    {
      path: "/onboarding/user-type",
      name: "OnboardingUserType",
      component: OnboardingUserType,
    },
    {
      path: "/onboarding/skills",
      name: "OnboardingSkills",
      component: OnboardingSkills,
    },
    {
      path: "/onboarding/location",
      name: "OnboardingLocation",
      component: OnboardingLocation,
    },
    {
      path: "/onboarding/gender-dob",
      name: "OnboardingGenderDOB",
      component: OnboardingGenderDOB,
    },
    {
      path: "/onboarding/email/account",
      name: "OnboardingEmailAccount",
      component: OnboardingEmailAccount,
    },
    // Historic Redirects
    {
      path: "/terms-conditions",
      redirect: "/legal",
    },
    {
      path: "/info",
      redirect: "/legal",
    },
    {
      path: "/privacy-policy",
      redirect: "/legal",
    },
    {
      path: "/the-team",
      redirect: "/company",
    },
    {
      path: "/info/legal",
      redirect: "/legal",
    },
    // Public Site Pages
    {
      path: "/legal",
      name: "Legal",
      component: Legal,
    },
    {
      path: "/company",
      name: "Company",
      component: Company,
    },
    {
      path: "/our-story",
      name: "OurStory",
      component: OurStory,
    },
    {
      path: "/support",
      name: "Support",
      component: Support,
    },
    {
      path: "/chipin",
      name: "ChipIn",
      component: ChipIn
    },
    {
      path: "/error",
      name: "error",
      component: Page404,
    },
    // Library
    {
      path: "/library/:area/:name/section/:id/list/",
      name: "LibraryAreaSubSectionList",
      component: SubSectionList,
    },
    {
      path: "/library/:area/:name/section/:id/:type",
      name: "LibraryAreaSubSection",
      component: LibrarySubSection,
    },
    {
      path: "/library/:area/:name",
      name: "LibraryArea",
      component: LibraryArea,
    },
    {
      path: "/library/sub-section/:id/list",
      name: "LibrarySubSectionList",
      component: SubSectionList,
    },
    {
      path: "/library/sub-section/:id",
      name: "LibrarySubSection",
      component: LibrarySubSection,
    },
    {
      path: "/library/:area/list/:id",
      name: "LibrarySectionList",
      component: LibrarySectionList,
    },
    {
      path: "/library/:id",
      name: "LibrarySection",
      component: LibrarySection,
    },
    {
      path: "/playlist/:id",
      name: "Playlist",
      component: Playlist,
    },
    {
      path: "/library/location/:id",
      name: "Location",
      component: Playlist,
    },
    {
      path: "/library/genre/:id",
      name: "Genre",
      component: Playlist,
    },
    // Authenticated / Account
    {
      path: "/songs",
      name: "Songs",
      component: Songs,
      beforeEnter: requireAuth,
    },
    {
      path: "/upload",
      name: "Upload",
      component: Upload,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/song/:id/edit-profile/genres",
      name: "EditSongProfileGenres",
      component: EditSongProfileGenres,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/song/:id/edit-profile",
      name: "EditSongProfile",
      component: EditSongProfile,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/edit-profile",
      name: "EditProfile",
      component: EditUserProfile,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/edit-profile/skills",
      name: "EditUserProfileSkills",
      component: EditUserProfileSkills,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/chipin/register",
      name: "SetupChipIn",
      component: SetupChipIn,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/sign-in",
      name: "SignInSettings",
      component: SignInSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/songs",
      name: "SongSettings",
      component: SongSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/chipin/plus/songs",
      name: "ChipInPlusSongSettings",
      component: ChipInPlusSongSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/chipin/plus",
      name: "ChipInPlusSettings",
      component: ChipInPlusSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/chipin/donations-made",
      name: "DonationsMade",
      component: DonationsMade,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/chipin/subscriptions-made",
      name: "SubscriptionsMade",
      component: SubscriptionsMade,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/edit",
      name: "EditAccountSettings",
      component: EditAccountSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/chipin",
      name: "ChipInAccountType",
      component: ChipInAccountType,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/change-password",
      name: "ChangePassword",
      component: ChangePassword,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/email",
      name: "EmailSettings",
      component: EmailSettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/notifications",
      name: "Notifications",
      component: Notifications,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/credits",
      name: "Credits",
      component: Credits,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings/privacy",
      name: "PrivacySettings",
      component: PrivacySettings,
      beforeEnter: requireAuth,
    },
    {
      path: "/account/settings",
      name: "AccountSettings",
      component: AccountSettings,
      beforeEnter: requireAuth,
    },
    /*{
            path: '/account/chipin/payments',
            name: 'ChipInPayments',
            component: ChipInPayments,
            beforeEnter: requireAuth
        },*/
    // ChipIn Manager
    {
      path: "/account/chipin",
      name: "ChipInAccount",
      component: ChipInAccount,
    },
    {
      path: "/account/chipin/transactions",
      name: "ChipInTransactions",
      component: ChipInTransactions,
    },
    {
      path: "/account/chipin/subscriptions",
      name: "ChipInSubscriptions",
      component: ChipInSubscriptions,
    },
    {
      path: "/account/chipin/payouts",
      name: "ChipInPayouts",
      component: ChipInPayouts,
    },
    {
      path: "/account/chipin/cards/add",
      name: "ChipInAddCard",
      component: ChipInAddCard,
    },
    {
      path: "/account/chipin/cards",
      name: "ChipInCards",
      component: ChipInCards,
    },
    {
      path: "/account/chipin/bank-accounts/add",
      name: "ChipInAddBankAccount",
      component: ChipInAddBankAccount,
    },
    {
      path: "/account/chipin/bank-accounts",
      name: "ChipInBankAccounts",
      component: ChipInBankAccounts,
    },
    // Site pages
    {
      path: "/:id",
      name: "ArtistUsername",
      component: Artist,
      beforeEnter: requireAuth,
    },
    {
      path: "/artist/:id",
      name: "Artist",
      component: Artist,
      beforeEnter: requireAuth,
    },
    {
      path: "/v3/:id",
      name: "ArtistV3",
      component: Artist,
    },
    {
      path: "/chipin/:id",
      name: "ArtistUsernameChipIn",
      component: Artist,
    },
    {
      path: "/song/:id",
      name: "Song",
      component: Song,
      beforeEnter: requireAuth,
    },
    {
      path: "/song/:username/:id",
      name: "SongProfileID",
      component: Song,
      beforeEnter: requireAuth,
    },
    {
      path: "/:username/:id",
      name: "SongProfile",
      component: Song,
      beforeEnter: requireAuth,
    },
    {
      path: "/chipin/success",
      name: "ChipInSuccess",
      component: ChipInSuccess,
    },
    {
      path: "/chipin/cancel",
      name: "ChipInCancel",
      component: ChipInCancel,
    },
    {
      path: "*",
      name: "404",
      component: Page404,
    },
  ],
});
