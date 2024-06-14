/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAPS = /* GraphQL */ `
  mutation CreateAPS(
    $condition: ModelAPSConditionInput
    $input: CreateAPSInput!
  ) {
    createAPS(condition: $condition, input: $input) {
      Registrants {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      Speakers {
        items {
          aPSSpeakersId
          apsHistory {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          bio
          company
          createdAt
          email
          firstName
          headshot
          id
          lastName
          linkedin
          mediaConsent
          phone
          presentationSummary
          presentationTitle
          privacyConsent
          title
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      codes {
        code
      }
      createdAt
      id
      updatedAt
      year
    }
  }
`;
export const createAPSRegistrant = /* GraphQL */ `
  mutation CreateAPSRegistrant(
    $condition: ModelAPSRegistrantConditionInput
    $input: CreateAPSRegistrantInput!
  ) {
    createAPSRegistrant(condition: $condition, input: $input) {
      code
      codeRequested
      codeSent
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const createAPSSpeaker = /* GraphQL */ `
  mutation CreateAPSSpeaker(
    $condition: ModelAPSSpeakerConditionInput
    $input: CreateAPSSpeakerInput!
  ) {
    createAPSSpeaker(condition: $condition, input: $input) {
      aPSSpeakersId
      apsHistory {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const createAPSSpeaker2024 = /* GraphQL */ `
  mutation CreateAPSSpeaker2024(
    $condition: ModelAPSSpeaker2024ConditionInput
    $input: CreateAPSSpeaker2024Input!
  ) {
    createAPSSpeaker2024(condition: $condition, input: $input) {
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const createAPSSponsor = /* GraphQL */ `
  mutation CreateAPSSponsor(
    $condition: ModelAPSSponsorConditionInput
    $input: CreateAPSSponsorInput!
  ) {
    createAPSSponsor(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      company {
        Employees {
          items {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        apsID {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        city
        createdAt
        email
        id
        name
        phone
        state
        street_1
        street_2
        updatedAt
        website
        zip
      }
      companyId
      createdAt
      id
      updatedAt
    }
  }
`;
export const createAPSTicket = /* GraphQL */ `
  mutation CreateAPSTicket(
    $condition: ModelAPSTicketConditionInput
    $input: CreateAPSTicketInput!
  ) {
    createAPSTicket(condition: $condition, input: $input) {
      company
      createdAt
      email
      id
      name
      paymentConfirmation
      phone
      title
      updatedAt
    }
  }
`;
export const createAPSTicketRegistrant = /* GraphQL */ `
  mutation CreateAPSTicketRegistrant(
    $condition: ModelAPSTicketRegistrantConditionInput
    $input: CreateAPSTicketRegistrantInput!
  ) {
    createAPSTicketRegistrant(condition: $condition, input: $input) {
      code
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const createAPSUser = /* GraphQL */ `
  mutation CreateAPSUser(
    $condition: ModelAPSUserConditionInput
    $input: CreateAPSUserInput!
  ) {
    createAPSUser(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      createdAt
      id
      updatedAt
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      userId
    }
  }
`;
export const createAddOnRegistrant = /* GraphQL */ `
  mutation CreateAddOnRegistrant(
    $condition: ModelAddOnRegistrantConditionInput
    $input: CreateAddOnRegistrantInput!
  ) {
    createAddOnRegistrant(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      tour
      updatedAt
    }
  }
`;
export const createAppStart = /* GraphQL */ `
  mutation CreateAppStart(
    $condition: ModelAppStartConditionInput
    $input: CreateAppStartInput!
  ) {
    createAppStart(condition: $condition, input: $input) {
      createdOn
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedOn
    }
  }
`;
export const createApplicationStart = /* GraphQL */ `
  mutation CreateApplicationStart(
    $condition: ModelApplicationStartConditionInput
    $input: CreateApplicationStartInput!
  ) {
    createApplicationStart(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const createAristosForm = /* GraphQL */ `
  mutation CreateAristosForm(
    $condition: ModelAristosFormConditionInput
    $input: CreateAristosFormInput!
  ) {
    createAristosForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $condition: ModelArticleConditionInput
    $input: CreateArticleInput!
  ) {
    createArticle(condition: $condition, input: $input) {
      content
      createdAt
      id
      media
      relatedCourses {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      seoImage
      slug
      subhead
      tags
      title
      updatedAt
    }
  }
`;
export const createArticleRelatedCourses = /* GraphQL */ `
  mutation CreateArticleRelatedCourses(
    $condition: ModelArticleRelatedCoursesConditionInput
    $input: CreateArticleRelatedCoursesInput!
  ) {
    createArticleRelatedCourses(condition: $condition, input: $input) {
      article {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      articleId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $condition: ModelAuthorConditionInput
    $input: CreateAuthorInput!
  ) {
    createAuthor(condition: $condition, input: $input) {
      company
      createdAt
      headshot
      id
      linkedIn
      name
      templates {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      title
      updatedAt
    }
  }
`;
export const createAuthorTemplates = /* GraphQL */ `
  mutation CreateAuthorTemplates(
    $condition: ModelAuthorTemplatesConditionInput
    $input: CreateAuthorTemplatesInput!
  ) {
    createAuthorTemplates(condition: $condition, input: $input) {
      author {
        company
        createdAt
        headshot
        id
        linkedIn
        name
        templates {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        title
        updatedAt
      }
      authorId
      createdAt
      id
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $condition: ModelBlogConditionInput
    $input: CreateBlogInput!
  ) {
    createBlog(condition: $condition, input: $input) {
      author
      content
      createdAt
      date
      id
      media
      slug
      tags
      title
      updatedAt
    }
  }
`;
export const createBoschForm = /* GraphQL */ `
  mutation CreateBoschForm(
    $condition: ModelBoschFormConditionInput
    $input: CreateBoschFormInput!
  ) {
    createBoschForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      topicFour
      topicOne
      topicThree
      topicTwo
      updatedAt
    }
  }
`;
export const createCMPMForm = /* GraphQL */ `
  mutation CreateCMPMForm(
    $condition: ModelCMPMFormConditionInput
    $input: CreateCMPMFormInput!
  ) {
    createCMPMForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cMPMFormUserId
      city
      cmpmGoals
      companyName
      companyTitle
      country
      createdOn
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const createCMPMSession = /* GraphQL */ `
  mutation CreateCMPMSession(
    $condition: ModelCMPMSessionConditionInput
    $input: CreateCMPMSessionInput!
  ) {
    createCMPMSession(condition: $condition, input: $input) {
      createdAt
      deadline
      endDate
      id
      startDate
      title
      updatedAt
    }
  }
`;
export const createCPSForm = /* GraphQL */ `
  mutation CreateCPSForm(
    $condition: ModelCPSFormConditionInput
    $input: CreateCPSFormInput!
  ) {
    createCPSForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cPSFormUserId
      city
      companyName
      companyTitle
      country
      cpsGoals
      createdOn
      elective
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const createCareer = /* GraphQL */ `
  mutation CreateCareer(
    $condition: ModelCareerConditionInput
    $input: CreateCareerInput!
  ) {
    createCareer(condition: $condition, input: $input) {
      altName
      apcCopy
      beverageCopy
      cmpmCopy
      coreCopy
      cpsCopy
      createdAt
      dayInLife {
        items {
          careerDayInLifeId
          createdAt
          desc
          icon
          id
          name
          updatedAt
        }
        nextToken
      }
      electiveCopy
      freeCopy
      id
      media
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const createCertAppStart = /* GraphQL */ `
  mutation CreateCertAppStart(
    $condition: ModelCertAppStartConditionInput
    $input: CreateCertAppStartInput!
  ) {
    createCertAppStart(condition: $condition, input: $input) {
      country
      createdAt
      email
      firstName
      id
      ipAddress
      lastName
      phone
      source
      sourceUrl
      type
      updatedAt
    }
  }
`;
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $condition: ModelCertificateConditionInput
    $input: CreateCertificateInput!
  ) {
    createCertificate(condition: $condition, input: $input) {
      brochure_link
      ceus_total
      courses {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      courses_total
      createdAt
      demoLink
      hours_total
      id
      lmsLink
      price_features
      price_full
      price_monthly
      slug
      title
      title_button_1_link
      title_button_1_text
      title_button_2_link
      title_button_2_text
      title_callout_1
      title_callout_2
      title_image
      title_text
      updatedAt
      video
      whoText
    }
  }
`;
export const createCertificateCourses = /* GraphQL */ `
  mutation CreateCertificateCourses(
    $condition: ModelCertificateCoursesConditionInput
    $input: CreateCertificateCoursesInput!
  ) {
    createCertificateCourses(condition: $condition, input: $input) {
      certificate {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      certificateId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const createCirriculumCourses = /* GraphQL */ `
  mutation CreateCirriculumCourses(
    $condition: ModelCirriculumCoursesConditionInput
    $input: CreateCirriculumCoursesInput!
  ) {
    createCirriculumCourses(condition: $condition, input: $input) {
      createdAt
      id
      lMSCirriculum {
        Courses {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        description
        id
        shorthand
        slug
        title
        updatedAt
      }
      lMSCirriculumId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const createClick = /* GraphQL */ `
  mutation CreateClick(
    $condition: ModelClickConditionInput
    $input: CreateClickInput!
  ) {
    createClick(condition: $condition, input: $input) {
      createdAt
      id
      identifier
      ipAddress
      location
      nextPath
      path
      ref
      type
      updatedAt
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $condition: ModelCompanyConditionInput
    $input: CreateCompanyInput!
  ) {
    createCompany(condition: $condition, input: $input) {
      Employees {
        items {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      apsID {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      city
      createdAt
      email
      id
      name
      phone
      state
      street_1
      street_2
      updatedAt
      website
      zip
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $condition: ModelCourseConditionInput
    $input: CreateCourseInput!
  ) {
    createCourse(condition: $condition, input: $input) {
      articles {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      category
      certificate {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      hour
      id
      lessons
      media
      price
      slug
      subhead
      title
      updatedAt
      video
      videos
    }
  }
`;
export const createCourseClick = /* GraphQL */ `
  mutation CreateCourseClick(
    $condition: ModelCourseClickConditionInput
    $input: CreateCourseClickInput!
  ) {
    createCourseClick(condition: $condition, input: $input) {
      country
      courseID
      createdAt
      format
      id
      ipAddress
      lat
      long
      nextPath
      page
      referrer
      updatedAt
    }
  }
`;
export const createCourseInstructors = /* GraphQL */ `
  mutation CreateCourseInstructors(
    $condition: ModelCourseInstructorsConditionInput
    $input: CreateCourseInstructorsInput!
  ) {
    createCourseInstructors(condition: $condition, input: $input) {
      createdAt
      id
      instructor {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      instructorId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const createCourseLessons = /* GraphQL */ `
  mutation CreateCourseLessons(
    $condition: ModelCourseLessonsConditionInput
    $input: CreateCourseLessonsInput!
  ) {
    createCourseLessons(condition: $condition, input: $input) {
      createdAt
      id
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      lMSLesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      lMSLessonId
      updatedAt
    }
  }
`;
export const createCourseSearch = /* GraphQL */ `
  mutation CreateCourseSearch(
    $condition: ModelCourseSearchConditionInput
    $input: CreateCourseSearchInput!
  ) {
    createCourseSearch(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      term
      updatedAt
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $condition: ModelCustomerConditionInput
    $input: CreateCustomerInput!
  ) {
    createCustomer(condition: $condition, input: $input) {
      courses {
        items {
          clicks
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      displayName
      email
      highlightColor
      id
      link
      logo
      offered
      offerings
      pdf
      primaryColor
      pscourses {
        items {
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      slide
      status
      updatedAt
      video
    }
  }
`;
export const createCustomerLibary = /* GraphQL */ `
  mutation CreateCustomerLibary(
    $condition: ModelCustomerLibaryConditionInput
    $input: CreateCustomerLibaryInput!
  ) {
    createCustomerLibary(condition: $condition, input: $input) {
      addOns
      clientCourses
      createdAt
      description
      displayName
      email
      highlightColor
      id
      link
      logo
      pdf
      primaryColor
      pschoolCourses
      slide
      slug
      status
      updatedAt
      video
    }
  }
`;
export const createDayInLifeItem = /* GraphQL */ `
  mutation CreateDayInLifeItem(
    $condition: ModelDayInLifeItemConditionInput
    $input: CreateDayInLifeItemInput!
  ) {
    createDayInLifeItem(condition: $condition, input: $input) {
      careerDayInLifeId
      createdAt
      desc
      icon
      id
      name
      updatedAt
    }
  }
`;
export const createGuardianForm = /* GraphQL */ `
  mutation CreateGuardianForm(
    $condition: ModelGuardianFormConditionInput
    $input: CreateGuardianFormInput!
  ) {
    createGuardianForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const createIncludedCourse = /* GraphQL */ `
  mutation CreateIncludedCourse(
    $condition: ModelIncludedCourseConditionInput
    $input: CreateIncludedCourseInput!
  ) {
    createIncludedCourse(condition: $condition, input: $input) {
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const createIndexRow = /* GraphQL */ `
  mutation CreateIndexRow(
    $condition: ModelIndexRowConditionInput
    $input: CreateIndexRowInput!
  ) {
    createIndexRow(condition: $condition, input: $input) {
      content
      createdAt
      headline
      id
      subhead
      templates {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const createIndexTemplate = /* GraphQL */ `
  mutation CreateIndexTemplate(
    $condition: ModelIndexTemplateConditionInput
    $input: CreateIndexTemplateInput!
  ) {
    createIndexTemplate(condition: $condition, input: $input) {
      authors {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      rows {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const createIndexTemplateRows = /* GraphQL */ `
  mutation CreateIndexTemplateRows(
    $condition: ModelIndexTemplateRowsConditionInput
    $input: CreateIndexTemplateRowsInput!
  ) {
    createIndexTemplateRows(condition: $condition, input: $input) {
      createdAt
      id
      indexRow {
        content
        createdAt
        headline
        id
        subhead
        templates {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        type
        updatedAt
      }
      indexRowId
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const createInstructor = /* GraphQL */ `
  mutation CreateInstructor(
    $condition: ModelInstructorConditionInput
    $input: CreateInstructorInput!
  ) {
    createInstructor(condition: $condition, input: $input) {
      coursesTaught {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      instructor {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      updatedAt
      userId
    }
  }
`;
export const createLMSCirriculum = /* GraphQL */ `
  mutation CreateLMSCirriculum(
    $condition: ModelLMSCirriculumConditionInput
    $input: CreateLMSCirriculumInput!
  ) {
    createLMSCirriculum(condition: $condition, input: $input) {
      Courses {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      description
      id
      shorthand
      slug
      title
      updatedAt
    }
  }
`;
export const createLMSCollection = /* GraphQL */ `
  mutation CreateLMSCollection(
    $condition: ModelLMSCollectionConditionInput
    $input: CreateLMSCollectionInput!
  ) {
    createLMSCollection(condition: $condition, input: $input) {
      category
      collectionId
      courses
      createdAt
      description
      hours
      id
      instructor
      instructorDescription
      instructorImage
      instructorLink
      lmsLink
      price
      slug
      subtitle
      title
      updatedAt
    }
  }
`;
export const createLMSCourse = /* GraphQL */ `
  mutation CreateLMSCourse(
    $condition: ModelLMSCourseConditionInput
    $input: CreateLMSCourseInput!
  ) {
    createLMSCourse(condition: $condition, input: $input) {
      altLink
      category
      categoryArray
      cirriculum {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      collection
      courseId
      createdAt
      demo
      hours
      id
      infoSheet
      instructors {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      lessons
      link
      lmsLessons {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      objectives
      partOf
      percentComplete
      preview
      price
      seoImage
      shortDescription
      slug
      studentCourseEnrolledId
      subheadline
      title
      trial_link
      type
      updatedAt
      videos
      what_learned
    }
  }
`;
export const createLMSLesson = /* GraphQL */ `
  mutation CreateLMSLesson(
    $condition: ModelLMSLessonConditionInput
    $input: CreateLMSLessonInput!
  ) {
    createLMSLesson(condition: $condition, input: $input) {
      content
      course {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      media
      modules {
        items {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        nextToken
      }
      objectives
      percentComplete
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const createLMSModule = /* GraphQL */ `
  mutation CreateLMSModule(
    $condition: ModelLMSModuleConditionInput
    $input: CreateLMSModuleInput!
  ) {
    createLMSModule(condition: $condition, input: $input) {
      content
      createdAt
      id
      lMSLessonModulesId
      lMSModuleQuizId
      lesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      media
      mediaType
      objectives
      quiz {
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        id
        lMSQuizModuleId
        module {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        prompt
        updatedAt
      }
      slides {
        items {
          createdAt
          description
          id
          lMSModuleSlidesId
          slideSource
          updatedAt
        }
        nextToken
      }
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const createLMSQuiz = /* GraphQL */ `
  mutation CreateLMSQuiz(
    $condition: ModelLMSQuizConditionInput
    $input: CreateLMSQuizInput!
  ) {
    createLMSQuiz(condition: $condition, input: $input) {
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      id
      lMSQuizModuleId
      module {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      prompt
      updatedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $condition: ModelLessonConditionInput
    $input: CreateLessonInput!
  ) {
    createLesson(condition: $condition, input: $input) {
      actionCTA
      actionExample
      actionLink
      actionLinkTitle
      actionSubhead
      author
      backdate
      content
      createdAt
      createdBy
      featured
      id
      lastEditedBy
      links {
        items {
          createdAt
          id
          lessonLinksId
          link
          name
          updatedAt
        }
        nextToken
      }
      media
      mediaType
      objectives
      related
      screengrab
      seoImage
      slides
      slug
      sources {
        items {
          createdAt
          id
          lessonSourcesId
          link
          name
          position
          updatedAt
        }
        nextToken
      }
      status
      subhead
      tags {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      title
      type
      updatedAt
      videoLink
    }
  }
`;
export const createLessonClick = /* GraphQL */ `
  mutation CreateLessonClick(
    $condition: ModelLessonClickConditionInput
    $input: CreateLessonClickInput!
  ) {
    createLessonClick(condition: $condition, input: $input) {
      LessonID
      country
      createdAt
      format
      id
      ipAddress
      lat
      long
      page
      referrer
      updatedAt
    }
  }
`;
export const createLessonLink = /* GraphQL */ `
  mutation CreateLessonLink(
    $condition: ModelLessonLinkConditionInput
    $input: CreateLessonLinkInput!
  ) {
    createLessonLink(condition: $condition, input: $input) {
      createdAt
      id
      lessonLinksId
      link
      name
      updatedAt
    }
  }
`;
export const createLessonSource = /* GraphQL */ `
  mutation CreateLessonSource(
    $condition: ModelLessonSourceConditionInput
    $input: CreateLessonSourceInput!
  ) {
    createLessonSource(condition: $condition, input: $input) {
      createdAt
      id
      lessonSourcesId
      link
      name
      position
      updatedAt
    }
  }
`;
export const createLessonTags = /* GraphQL */ `
  mutation CreateLessonTags(
    $condition: ModelLessonTagsConditionInput
    $input: CreateLessonTagsInput!
  ) {
    createLessonTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      lessonId
      tags {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      tagsId
      updatedAt
    }
  }
`;
export const createMorrisetteForm = /* GraphQL */ `
  mutation CreateMorrisetteForm(
    $condition: ModelMorrisetteFormConditionInput
    $input: CreateMorrisetteFormInput!
  ) {
    createMorrisetteForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      preference
      title
      updatedAt
    }
  }
`;
export const createObjective = /* GraphQL */ `
  mutation CreateObjective(
    $condition: ModelObjectiveConditionInput
    $input: CreateObjectiveInput!
  ) {
    createObjective(condition: $condition, input: $input) {
      completed
      createdAt
      id
      objective
      updatedAt
    }
  }
`;
export const createSalesBar = /* GraphQL */ `
  mutation CreateSalesBar(
    $condition: ModelSalesBarConditionInput
    $input: CreateSalesBarInput!
  ) {
    createSalesBar(condition: $condition, input: $input) {
      createdAt
      icon
      id
      link
      text
      type
      updatedAt
    }
  }
`;
export const createSalesbarClick = /* GraphQL */ `
  mutation CreateSalesbarClick(
    $condition: ModelSalesbarClickConditionInput
    $input: CreateSalesbarClickInput!
  ) {
    createSalesbarClick(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      link
      page
      updatedAt
    }
  }
`;
export const createSlide = /* GraphQL */ `
  mutation CreateSlide(
    $condition: ModelSlideConditionInput
    $input: CreateSlideInput!
  ) {
    createSlide(condition: $condition, input: $input) {
      createdAt
      description
      id
      lMSModuleSlidesId
      slideSource
      updatedAt
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $condition: ModelStaffConditionInput
    $input: CreateStaffInput!
  ) {
    createStaff(condition: $condition, input: $input) {
      createdAt
      fullName
      id
      image
      linkedIn
      title
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $condition: ModelStudentConditionInput
    $input: CreateStudentInput!
  ) {
    createStudent(condition: $condition, input: $input) {
      courseEnrolled {
        items {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        nextToken
      }
      createdAt
      id
      student {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      studentId
      updatedAt
    }
  }
`;
export const createSurgereForm = /* GraphQL */ `
  mutation CreateSurgereForm(
    $condition: ModelSurgereFormConditionInput
    $input: CreateSurgereFormInput!
  ) {
    createSurgereForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const createTags = /* GraphQL */ `
  mutation CreateTags(
    $condition: ModelTagsConditionInput
    $input: CreateTagsInput!
  ) {
    createTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      tag
      updatedAt
    }
  }
`;
export const createTestimonial = /* GraphQL */ `
  mutation CreateTestimonial(
    $condition: ModelTestimonialConditionInput
    $input: CreateTestimonialInput!
  ) {
    createTestimonial(condition: $condition, input: $input) {
      affiliation
      author
      company
      content
      createdAt
      date
      featured
      headshot
      id
      linkedin
      tags
      title
      updatedAt
      video
    }
  }
`;
export const createTimestamp = /* GraphQL */ `
  mutation CreateTimestamp(
    $condition: ModelTimestampConditionInput
    $input: CreateTimestampInput!
  ) {
    createTimestamp(condition: $condition, input: $input) {
      createdAt
      description
      id
      time
      updatedAt
    }
  }
`;
export const createTourist = /* GraphQL */ `
  mutation CreateTourist(
    $condition: ModelTouristConditionInput
    $input: CreateTouristInput!
  ) {
    createTourist(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      phone
      tour
      updatedAt
    }
  }
`;
export const createTrackedCourse = /* GraphQL */ `
  mutation CreateTrackedCourse(
    $condition: ModelTrackedCourseConditionInput
    $input: CreateTrackedCourseInput!
  ) {
    createTrackedCourse(condition: $condition, input: $input) {
      clicks
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $condition: ModelUserConditionInput
    $input: CreateUserInput!
  ) {
    createUser(condition: $condition, input: $input) {
      apss {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      bio
      cell
      cmpmForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cMPMFormUserId
        city
        cmpmGoals
        companyName
        companyTitle
        country
        createdOn
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cmpmFormID
      company
      companyID
      cpsForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cPSFormUserId
        city
        companyName
        companyTitle
        country
        cpsGoals
        createdOn
        elective
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cpsFormID
      createdAt
      email
      id
      instructorId {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      linkedin
      name
      office
      picture
      savedArticles
      savedCourses
      savedLessons
      source
      studentId {
        courseEnrolled {
          items {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          nextToken
        }
        createdAt
        id
        student {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        studentId
        updatedAt
      }
      title
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const createWorkshopForm = /* GraphQL */ `
  mutation CreateWorkshopForm(
    $condition: ModelWorkshopFormConditionInput
    $input: CreateWorkshopFormInput!
  ) {
    createWorkshopForm(condition: $condition, input: $input) {
      audienceSize
      companyName
      createdOn
      email
      eventDate
      eventDescription
      eventLocation
      firstName
      id
      lastName
      phone
      updatedOn
    }
  }
`;
export const deleteAPS = /* GraphQL */ `
  mutation DeleteAPS(
    $condition: ModelAPSConditionInput
    $input: DeleteAPSInput!
  ) {
    deleteAPS(condition: $condition, input: $input) {
      Registrants {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      Speakers {
        items {
          aPSSpeakersId
          apsHistory {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          bio
          company
          createdAt
          email
          firstName
          headshot
          id
          lastName
          linkedin
          mediaConsent
          phone
          presentationSummary
          presentationTitle
          privacyConsent
          title
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      codes {
        code
      }
      createdAt
      id
      updatedAt
      year
    }
  }
`;
export const deleteAPSRegistrant = /* GraphQL */ `
  mutation DeleteAPSRegistrant(
    $condition: ModelAPSRegistrantConditionInput
    $input: DeleteAPSRegistrantInput!
  ) {
    deleteAPSRegistrant(condition: $condition, input: $input) {
      code
      codeRequested
      codeSent
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const deleteAPSSpeaker = /* GraphQL */ `
  mutation DeleteAPSSpeaker(
    $condition: ModelAPSSpeakerConditionInput
    $input: DeleteAPSSpeakerInput!
  ) {
    deleteAPSSpeaker(condition: $condition, input: $input) {
      aPSSpeakersId
      apsHistory {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const deleteAPSSpeaker2024 = /* GraphQL */ `
  mutation DeleteAPSSpeaker2024(
    $condition: ModelAPSSpeaker2024ConditionInput
    $input: DeleteAPSSpeaker2024Input!
  ) {
    deleteAPSSpeaker2024(condition: $condition, input: $input) {
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const deleteAPSSponsor = /* GraphQL */ `
  mutation DeleteAPSSponsor(
    $condition: ModelAPSSponsorConditionInput
    $input: DeleteAPSSponsorInput!
  ) {
    deleteAPSSponsor(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      company {
        Employees {
          items {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        apsID {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        city
        createdAt
        email
        id
        name
        phone
        state
        street_1
        street_2
        updatedAt
        website
        zip
      }
      companyId
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteAPSTicket = /* GraphQL */ `
  mutation DeleteAPSTicket(
    $condition: ModelAPSTicketConditionInput
    $input: DeleteAPSTicketInput!
  ) {
    deleteAPSTicket(condition: $condition, input: $input) {
      company
      createdAt
      email
      id
      name
      paymentConfirmation
      phone
      title
      updatedAt
    }
  }
`;
export const deleteAPSTicketRegistrant = /* GraphQL */ `
  mutation DeleteAPSTicketRegistrant(
    $condition: ModelAPSTicketRegistrantConditionInput
    $input: DeleteAPSTicketRegistrantInput!
  ) {
    deleteAPSTicketRegistrant(condition: $condition, input: $input) {
      code
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const deleteAPSUser = /* GraphQL */ `
  mutation DeleteAPSUser(
    $condition: ModelAPSUserConditionInput
    $input: DeleteAPSUserInput!
  ) {
    deleteAPSUser(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      createdAt
      id
      updatedAt
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      userId
    }
  }
`;
export const deleteAddOnRegistrant = /* GraphQL */ `
  mutation DeleteAddOnRegistrant(
    $condition: ModelAddOnRegistrantConditionInput
    $input: DeleteAddOnRegistrantInput!
  ) {
    deleteAddOnRegistrant(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      tour
      updatedAt
    }
  }
`;
export const deleteAppStart = /* GraphQL */ `
  mutation DeleteAppStart(
    $condition: ModelAppStartConditionInput
    $input: DeleteAppStartInput!
  ) {
    deleteAppStart(condition: $condition, input: $input) {
      createdOn
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedOn
    }
  }
`;
export const deleteApplicationStart = /* GraphQL */ `
  mutation DeleteApplicationStart(
    $condition: ModelApplicationStartConditionInput
    $input: DeleteApplicationStartInput!
  ) {
    deleteApplicationStart(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const deleteAristosForm = /* GraphQL */ `
  mutation DeleteAristosForm(
    $condition: ModelAristosFormConditionInput
    $input: DeleteAristosFormInput!
  ) {
    deleteAristosForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $condition: ModelArticleConditionInput
    $input: DeleteArticleInput!
  ) {
    deleteArticle(condition: $condition, input: $input) {
      content
      createdAt
      id
      media
      relatedCourses {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      seoImage
      slug
      subhead
      tags
      title
      updatedAt
    }
  }
`;
export const deleteArticleRelatedCourses = /* GraphQL */ `
  mutation DeleteArticleRelatedCourses(
    $condition: ModelArticleRelatedCoursesConditionInput
    $input: DeleteArticleRelatedCoursesInput!
  ) {
    deleteArticleRelatedCourses(condition: $condition, input: $input) {
      article {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      articleId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $condition: ModelAuthorConditionInput
    $input: DeleteAuthorInput!
  ) {
    deleteAuthor(condition: $condition, input: $input) {
      company
      createdAt
      headshot
      id
      linkedIn
      name
      templates {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      title
      updatedAt
    }
  }
`;
export const deleteAuthorTemplates = /* GraphQL */ `
  mutation DeleteAuthorTemplates(
    $condition: ModelAuthorTemplatesConditionInput
    $input: DeleteAuthorTemplatesInput!
  ) {
    deleteAuthorTemplates(condition: $condition, input: $input) {
      author {
        company
        createdAt
        headshot
        id
        linkedIn
        name
        templates {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        title
        updatedAt
      }
      authorId
      createdAt
      id
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $condition: ModelBlogConditionInput
    $input: DeleteBlogInput!
  ) {
    deleteBlog(condition: $condition, input: $input) {
      author
      content
      createdAt
      date
      id
      media
      slug
      tags
      title
      updatedAt
    }
  }
`;
export const deleteBoschForm = /* GraphQL */ `
  mutation DeleteBoschForm(
    $condition: ModelBoschFormConditionInput
    $input: DeleteBoschFormInput!
  ) {
    deleteBoschForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      topicFour
      topicOne
      topicThree
      topicTwo
      updatedAt
    }
  }
`;
export const deleteCMPMForm = /* GraphQL */ `
  mutation DeleteCMPMForm(
    $condition: ModelCMPMFormConditionInput
    $input: DeleteCMPMFormInput!
  ) {
    deleteCMPMForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cMPMFormUserId
      city
      cmpmGoals
      companyName
      companyTitle
      country
      createdOn
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const deleteCMPMSession = /* GraphQL */ `
  mutation DeleteCMPMSession(
    $condition: ModelCMPMSessionConditionInput
    $input: DeleteCMPMSessionInput!
  ) {
    deleteCMPMSession(condition: $condition, input: $input) {
      createdAt
      deadline
      endDate
      id
      startDate
      title
      updatedAt
    }
  }
`;
export const deleteCPSForm = /* GraphQL */ `
  mutation DeleteCPSForm(
    $condition: ModelCPSFormConditionInput
    $input: DeleteCPSFormInput!
  ) {
    deleteCPSForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cPSFormUserId
      city
      companyName
      companyTitle
      country
      cpsGoals
      createdOn
      elective
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const deleteCareer = /* GraphQL */ `
  mutation DeleteCareer(
    $condition: ModelCareerConditionInput
    $input: DeleteCareerInput!
  ) {
    deleteCareer(condition: $condition, input: $input) {
      altName
      apcCopy
      beverageCopy
      cmpmCopy
      coreCopy
      cpsCopy
      createdAt
      dayInLife {
        items {
          careerDayInLifeId
          createdAt
          desc
          icon
          id
          name
          updatedAt
        }
        nextToken
      }
      electiveCopy
      freeCopy
      id
      media
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const deleteCertAppStart = /* GraphQL */ `
  mutation DeleteCertAppStart(
    $condition: ModelCertAppStartConditionInput
    $input: DeleteCertAppStartInput!
  ) {
    deleteCertAppStart(condition: $condition, input: $input) {
      country
      createdAt
      email
      firstName
      id
      ipAddress
      lastName
      phone
      source
      sourceUrl
      type
      updatedAt
    }
  }
`;
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $condition: ModelCertificateConditionInput
    $input: DeleteCertificateInput!
  ) {
    deleteCertificate(condition: $condition, input: $input) {
      brochure_link
      ceus_total
      courses {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      courses_total
      createdAt
      demoLink
      hours_total
      id
      lmsLink
      price_features
      price_full
      price_monthly
      slug
      title
      title_button_1_link
      title_button_1_text
      title_button_2_link
      title_button_2_text
      title_callout_1
      title_callout_2
      title_image
      title_text
      updatedAt
      video
      whoText
    }
  }
`;
export const deleteCertificateCourses = /* GraphQL */ `
  mutation DeleteCertificateCourses(
    $condition: ModelCertificateCoursesConditionInput
    $input: DeleteCertificateCoursesInput!
  ) {
    deleteCertificateCourses(condition: $condition, input: $input) {
      certificate {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      certificateId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const deleteCirriculumCourses = /* GraphQL */ `
  mutation DeleteCirriculumCourses(
    $condition: ModelCirriculumCoursesConditionInput
    $input: DeleteCirriculumCoursesInput!
  ) {
    deleteCirriculumCourses(condition: $condition, input: $input) {
      createdAt
      id
      lMSCirriculum {
        Courses {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        description
        id
        shorthand
        slug
        title
        updatedAt
      }
      lMSCirriculumId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const deleteClick = /* GraphQL */ `
  mutation DeleteClick(
    $condition: ModelClickConditionInput
    $input: DeleteClickInput!
  ) {
    deleteClick(condition: $condition, input: $input) {
      createdAt
      id
      identifier
      ipAddress
      location
      nextPath
      path
      ref
      type
      updatedAt
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $condition: ModelCompanyConditionInput
    $input: DeleteCompanyInput!
  ) {
    deleteCompany(condition: $condition, input: $input) {
      Employees {
        items {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      apsID {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      city
      createdAt
      email
      id
      name
      phone
      state
      street_1
      street_2
      updatedAt
      website
      zip
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $condition: ModelCourseConditionInput
    $input: DeleteCourseInput!
  ) {
    deleteCourse(condition: $condition, input: $input) {
      articles {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      category
      certificate {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      hour
      id
      lessons
      media
      price
      slug
      subhead
      title
      updatedAt
      video
      videos
    }
  }
`;
export const deleteCourseClick = /* GraphQL */ `
  mutation DeleteCourseClick(
    $condition: ModelCourseClickConditionInput
    $input: DeleteCourseClickInput!
  ) {
    deleteCourseClick(condition: $condition, input: $input) {
      country
      courseID
      createdAt
      format
      id
      ipAddress
      lat
      long
      nextPath
      page
      referrer
      updatedAt
    }
  }
`;
export const deleteCourseInstructors = /* GraphQL */ `
  mutation DeleteCourseInstructors(
    $condition: ModelCourseInstructorsConditionInput
    $input: DeleteCourseInstructorsInput!
  ) {
    deleteCourseInstructors(condition: $condition, input: $input) {
      createdAt
      id
      instructor {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      instructorId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const deleteCourseLessons = /* GraphQL */ `
  mutation DeleteCourseLessons(
    $condition: ModelCourseLessonsConditionInput
    $input: DeleteCourseLessonsInput!
  ) {
    deleteCourseLessons(condition: $condition, input: $input) {
      createdAt
      id
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      lMSLesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      lMSLessonId
      updatedAt
    }
  }
`;
export const deleteCourseSearch = /* GraphQL */ `
  mutation DeleteCourseSearch(
    $condition: ModelCourseSearchConditionInput
    $input: DeleteCourseSearchInput!
  ) {
    deleteCourseSearch(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      term
      updatedAt
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $condition: ModelCustomerConditionInput
    $input: DeleteCustomerInput!
  ) {
    deleteCustomer(condition: $condition, input: $input) {
      courses {
        items {
          clicks
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      displayName
      email
      highlightColor
      id
      link
      logo
      offered
      offerings
      pdf
      primaryColor
      pscourses {
        items {
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      slide
      status
      updatedAt
      video
    }
  }
`;
export const deleteCustomerLibary = /* GraphQL */ `
  mutation DeleteCustomerLibary(
    $condition: ModelCustomerLibaryConditionInput
    $input: DeleteCustomerLibaryInput!
  ) {
    deleteCustomerLibary(condition: $condition, input: $input) {
      addOns
      clientCourses
      createdAt
      description
      displayName
      email
      highlightColor
      id
      link
      logo
      pdf
      primaryColor
      pschoolCourses
      slide
      slug
      status
      updatedAt
      video
    }
  }
`;
export const deleteDayInLifeItem = /* GraphQL */ `
  mutation DeleteDayInLifeItem(
    $condition: ModelDayInLifeItemConditionInput
    $input: DeleteDayInLifeItemInput!
  ) {
    deleteDayInLifeItem(condition: $condition, input: $input) {
      careerDayInLifeId
      createdAt
      desc
      icon
      id
      name
      updatedAt
    }
  }
`;
export const deleteGuardianForm = /* GraphQL */ `
  mutation DeleteGuardianForm(
    $condition: ModelGuardianFormConditionInput
    $input: DeleteGuardianFormInput!
  ) {
    deleteGuardianForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const deleteIncludedCourse = /* GraphQL */ `
  mutation DeleteIncludedCourse(
    $condition: ModelIncludedCourseConditionInput
    $input: DeleteIncludedCourseInput!
  ) {
    deleteIncludedCourse(condition: $condition, input: $input) {
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const deleteIndexRow = /* GraphQL */ `
  mutation DeleteIndexRow(
    $condition: ModelIndexRowConditionInput
    $input: DeleteIndexRowInput!
  ) {
    deleteIndexRow(condition: $condition, input: $input) {
      content
      createdAt
      headline
      id
      subhead
      templates {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const deleteIndexTemplate = /* GraphQL */ `
  mutation DeleteIndexTemplate(
    $condition: ModelIndexTemplateConditionInput
    $input: DeleteIndexTemplateInput!
  ) {
    deleteIndexTemplate(condition: $condition, input: $input) {
      authors {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      rows {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const deleteIndexTemplateRows = /* GraphQL */ `
  mutation DeleteIndexTemplateRows(
    $condition: ModelIndexTemplateRowsConditionInput
    $input: DeleteIndexTemplateRowsInput!
  ) {
    deleteIndexTemplateRows(condition: $condition, input: $input) {
      createdAt
      id
      indexRow {
        content
        createdAt
        headline
        id
        subhead
        templates {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        type
        updatedAt
      }
      indexRowId
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const deleteInstructor = /* GraphQL */ `
  mutation DeleteInstructor(
    $condition: ModelInstructorConditionInput
    $input: DeleteInstructorInput!
  ) {
    deleteInstructor(condition: $condition, input: $input) {
      coursesTaught {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      instructor {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      updatedAt
      userId
    }
  }
`;
export const deleteLMSCirriculum = /* GraphQL */ `
  mutation DeleteLMSCirriculum(
    $condition: ModelLMSCirriculumConditionInput
    $input: DeleteLMSCirriculumInput!
  ) {
    deleteLMSCirriculum(condition: $condition, input: $input) {
      Courses {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      description
      id
      shorthand
      slug
      title
      updatedAt
    }
  }
`;
export const deleteLMSCollection = /* GraphQL */ `
  mutation DeleteLMSCollection(
    $condition: ModelLMSCollectionConditionInput
    $input: DeleteLMSCollectionInput!
  ) {
    deleteLMSCollection(condition: $condition, input: $input) {
      category
      collectionId
      courses
      createdAt
      description
      hours
      id
      instructor
      instructorDescription
      instructorImage
      instructorLink
      lmsLink
      price
      slug
      subtitle
      title
      updatedAt
    }
  }
`;
export const deleteLMSCourse = /* GraphQL */ `
  mutation DeleteLMSCourse(
    $condition: ModelLMSCourseConditionInput
    $input: DeleteLMSCourseInput!
  ) {
    deleteLMSCourse(condition: $condition, input: $input) {
      altLink
      category
      categoryArray
      cirriculum {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      collection
      courseId
      createdAt
      demo
      hours
      id
      infoSheet
      instructors {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      lessons
      link
      lmsLessons {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      objectives
      partOf
      percentComplete
      preview
      price
      seoImage
      shortDescription
      slug
      studentCourseEnrolledId
      subheadline
      title
      trial_link
      type
      updatedAt
      videos
      what_learned
    }
  }
`;
export const deleteLMSLesson = /* GraphQL */ `
  mutation DeleteLMSLesson(
    $condition: ModelLMSLessonConditionInput
    $input: DeleteLMSLessonInput!
  ) {
    deleteLMSLesson(condition: $condition, input: $input) {
      content
      course {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      media
      modules {
        items {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        nextToken
      }
      objectives
      percentComplete
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const deleteLMSModule = /* GraphQL */ `
  mutation DeleteLMSModule(
    $condition: ModelLMSModuleConditionInput
    $input: DeleteLMSModuleInput!
  ) {
    deleteLMSModule(condition: $condition, input: $input) {
      content
      createdAt
      id
      lMSLessonModulesId
      lMSModuleQuizId
      lesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      media
      mediaType
      objectives
      quiz {
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        id
        lMSQuizModuleId
        module {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        prompt
        updatedAt
      }
      slides {
        items {
          createdAt
          description
          id
          lMSModuleSlidesId
          slideSource
          updatedAt
        }
        nextToken
      }
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const deleteLMSQuiz = /* GraphQL */ `
  mutation DeleteLMSQuiz(
    $condition: ModelLMSQuizConditionInput
    $input: DeleteLMSQuizInput!
  ) {
    deleteLMSQuiz(condition: $condition, input: $input) {
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      id
      lMSQuizModuleId
      module {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      prompt
      updatedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $condition: ModelLessonConditionInput
    $input: DeleteLessonInput!
  ) {
    deleteLesson(condition: $condition, input: $input) {
      actionCTA
      actionExample
      actionLink
      actionLinkTitle
      actionSubhead
      author
      backdate
      content
      createdAt
      createdBy
      featured
      id
      lastEditedBy
      links {
        items {
          createdAt
          id
          lessonLinksId
          link
          name
          updatedAt
        }
        nextToken
      }
      media
      mediaType
      objectives
      related
      screengrab
      seoImage
      slides
      slug
      sources {
        items {
          createdAt
          id
          lessonSourcesId
          link
          name
          position
          updatedAt
        }
        nextToken
      }
      status
      subhead
      tags {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      title
      type
      updatedAt
      videoLink
    }
  }
`;
export const deleteLessonClick = /* GraphQL */ `
  mutation DeleteLessonClick(
    $condition: ModelLessonClickConditionInput
    $input: DeleteLessonClickInput!
  ) {
    deleteLessonClick(condition: $condition, input: $input) {
      LessonID
      country
      createdAt
      format
      id
      ipAddress
      lat
      long
      page
      referrer
      updatedAt
    }
  }
`;
export const deleteLessonLink = /* GraphQL */ `
  mutation DeleteLessonLink(
    $condition: ModelLessonLinkConditionInput
    $input: DeleteLessonLinkInput!
  ) {
    deleteLessonLink(condition: $condition, input: $input) {
      createdAt
      id
      lessonLinksId
      link
      name
      updatedAt
    }
  }
`;
export const deleteLessonSource = /* GraphQL */ `
  mutation DeleteLessonSource(
    $condition: ModelLessonSourceConditionInput
    $input: DeleteLessonSourceInput!
  ) {
    deleteLessonSource(condition: $condition, input: $input) {
      createdAt
      id
      lessonSourcesId
      link
      name
      position
      updatedAt
    }
  }
`;
export const deleteLessonTags = /* GraphQL */ `
  mutation DeleteLessonTags(
    $condition: ModelLessonTagsConditionInput
    $input: DeleteLessonTagsInput!
  ) {
    deleteLessonTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      lessonId
      tags {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      tagsId
      updatedAt
    }
  }
`;
export const deleteMorrisetteForm = /* GraphQL */ `
  mutation DeleteMorrisetteForm(
    $condition: ModelMorrisetteFormConditionInput
    $input: DeleteMorrisetteFormInput!
  ) {
    deleteMorrisetteForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      preference
      title
      updatedAt
    }
  }
`;
export const deleteObjective = /* GraphQL */ `
  mutation DeleteObjective(
    $condition: ModelObjectiveConditionInput
    $input: DeleteObjectiveInput!
  ) {
    deleteObjective(condition: $condition, input: $input) {
      completed
      createdAt
      id
      objective
      updatedAt
    }
  }
`;
export const deleteSalesBar = /* GraphQL */ `
  mutation DeleteSalesBar(
    $condition: ModelSalesBarConditionInput
    $input: DeleteSalesBarInput!
  ) {
    deleteSalesBar(condition: $condition, input: $input) {
      createdAt
      icon
      id
      link
      text
      type
      updatedAt
    }
  }
`;
export const deleteSalesbarClick = /* GraphQL */ `
  mutation DeleteSalesbarClick(
    $condition: ModelSalesbarClickConditionInput
    $input: DeleteSalesbarClickInput!
  ) {
    deleteSalesbarClick(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      link
      page
      updatedAt
    }
  }
`;
export const deleteSlide = /* GraphQL */ `
  mutation DeleteSlide(
    $condition: ModelSlideConditionInput
    $input: DeleteSlideInput!
  ) {
    deleteSlide(condition: $condition, input: $input) {
      createdAt
      description
      id
      lMSModuleSlidesId
      slideSource
      updatedAt
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $condition: ModelStaffConditionInput
    $input: DeleteStaffInput!
  ) {
    deleteStaff(condition: $condition, input: $input) {
      createdAt
      fullName
      id
      image
      linkedIn
      title
      updatedAt
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $condition: ModelStudentConditionInput
    $input: DeleteStudentInput!
  ) {
    deleteStudent(condition: $condition, input: $input) {
      courseEnrolled {
        items {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        nextToken
      }
      createdAt
      id
      student {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      studentId
      updatedAt
    }
  }
`;
export const deleteSurgereForm = /* GraphQL */ `
  mutation DeleteSurgereForm(
    $condition: ModelSurgereFormConditionInput
    $input: DeleteSurgereFormInput!
  ) {
    deleteSurgereForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const deleteTags = /* GraphQL */ `
  mutation DeleteTags(
    $condition: ModelTagsConditionInput
    $input: DeleteTagsInput!
  ) {
    deleteTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      tag
      updatedAt
    }
  }
`;
export const deleteTestimonial = /* GraphQL */ `
  mutation DeleteTestimonial(
    $condition: ModelTestimonialConditionInput
    $input: DeleteTestimonialInput!
  ) {
    deleteTestimonial(condition: $condition, input: $input) {
      affiliation
      author
      company
      content
      createdAt
      date
      featured
      headshot
      id
      linkedin
      tags
      title
      updatedAt
      video
    }
  }
`;
export const deleteTimestamp = /* GraphQL */ `
  mutation DeleteTimestamp(
    $condition: ModelTimestampConditionInput
    $input: DeleteTimestampInput!
  ) {
    deleteTimestamp(condition: $condition, input: $input) {
      createdAt
      description
      id
      time
      updatedAt
    }
  }
`;
export const deleteTourist = /* GraphQL */ `
  mutation DeleteTourist(
    $condition: ModelTouristConditionInput
    $input: DeleteTouristInput!
  ) {
    deleteTourist(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      phone
      tour
      updatedAt
    }
  }
`;
export const deleteTrackedCourse = /* GraphQL */ `
  mutation DeleteTrackedCourse(
    $condition: ModelTrackedCourseConditionInput
    $input: DeleteTrackedCourseInput!
  ) {
    deleteTrackedCourse(condition: $condition, input: $input) {
      clicks
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $condition: ModelUserConditionInput
    $input: DeleteUserInput!
  ) {
    deleteUser(condition: $condition, input: $input) {
      apss {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      bio
      cell
      cmpmForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cMPMFormUserId
        city
        cmpmGoals
        companyName
        companyTitle
        country
        createdOn
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cmpmFormID
      company
      companyID
      cpsForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cPSFormUserId
        city
        companyName
        companyTitle
        country
        cpsGoals
        createdOn
        elective
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cpsFormID
      createdAt
      email
      id
      instructorId {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      linkedin
      name
      office
      picture
      savedArticles
      savedCourses
      savedLessons
      source
      studentId {
        courseEnrolled {
          items {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          nextToken
        }
        createdAt
        id
        student {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        studentId
        updatedAt
      }
      title
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const deleteWorkshopForm = /* GraphQL */ `
  mutation DeleteWorkshopForm(
    $condition: ModelWorkshopFormConditionInput
    $input: DeleteWorkshopFormInput!
  ) {
    deleteWorkshopForm(condition: $condition, input: $input) {
      audienceSize
      companyName
      createdOn
      email
      eventDate
      eventDescription
      eventLocation
      firstName
      id
      lastName
      phone
      updatedOn
    }
  }
`;
export const updateAPS = /* GraphQL */ `
  mutation UpdateAPS(
    $condition: ModelAPSConditionInput
    $input: UpdateAPSInput!
  ) {
    updateAPS(condition: $condition, input: $input) {
      Registrants {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      Speakers {
        items {
          aPSSpeakersId
          apsHistory {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          bio
          company
          createdAt
          email
          firstName
          headshot
          id
          lastName
          linkedin
          mediaConsent
          phone
          presentationSummary
          presentationTitle
          privacyConsent
          title
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      codes {
        code
      }
      createdAt
      id
      updatedAt
      year
    }
  }
`;
export const updateAPSRegistrant = /* GraphQL */ `
  mutation UpdateAPSRegistrant(
    $condition: ModelAPSRegistrantConditionInput
    $input: UpdateAPSRegistrantInput!
  ) {
    updateAPSRegistrant(condition: $condition, input: $input) {
      code
      codeRequested
      codeSent
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const updateAPSSpeaker = /* GraphQL */ `
  mutation UpdateAPSSpeaker(
    $condition: ModelAPSSpeakerConditionInput
    $input: UpdateAPSSpeakerInput!
  ) {
    updateAPSSpeaker(condition: $condition, input: $input) {
      aPSSpeakersId
      apsHistory {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const updateAPSSpeaker2024 = /* GraphQL */ `
  mutation UpdateAPSSpeaker2024(
    $condition: ModelAPSSpeaker2024ConditionInput
    $input: UpdateAPSSpeaker2024Input!
  ) {
    updateAPSSpeaker2024(condition: $condition, input: $input) {
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const updateAPSSponsor = /* GraphQL */ `
  mutation UpdateAPSSponsor(
    $condition: ModelAPSSponsorConditionInput
    $input: UpdateAPSSponsorInput!
  ) {
    updateAPSSponsor(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      company {
        Employees {
          items {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        apsID {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        city
        createdAt
        email
        id
        name
        phone
        state
        street_1
        street_2
        updatedAt
        website
        zip
      }
      companyId
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateAPSTicket = /* GraphQL */ `
  mutation UpdateAPSTicket(
    $condition: ModelAPSTicketConditionInput
    $input: UpdateAPSTicketInput!
  ) {
    updateAPSTicket(condition: $condition, input: $input) {
      company
      createdAt
      email
      id
      name
      paymentConfirmation
      phone
      title
      updatedAt
    }
  }
`;
export const updateAPSTicketRegistrant = /* GraphQL */ `
  mutation UpdateAPSTicketRegistrant(
    $condition: ModelAPSTicketRegistrantConditionInput
    $input: UpdateAPSTicketRegistrantInput!
  ) {
    updateAPSTicketRegistrant(condition: $condition, input: $input) {
      code
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const updateAPSUser = /* GraphQL */ `
  mutation UpdateAPSUser(
    $condition: ModelAPSUserConditionInput
    $input: UpdateAPSUserInput!
  ) {
    updateAPSUser(condition: $condition, input: $input) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      createdAt
      id
      updatedAt
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      userId
    }
  }
`;
export const updateAddOnRegistrant = /* GraphQL */ `
  mutation UpdateAddOnRegistrant(
    $condition: ModelAddOnRegistrantConditionInput
    $input: UpdateAddOnRegistrantInput!
  ) {
    updateAddOnRegistrant(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      tour
      updatedAt
    }
  }
`;
export const updateAppStart = /* GraphQL */ `
  mutation UpdateAppStart(
    $condition: ModelAppStartConditionInput
    $input: UpdateAppStartInput!
  ) {
    updateAppStart(condition: $condition, input: $input) {
      createdOn
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedOn
    }
  }
`;
export const updateApplicationStart = /* GraphQL */ `
  mutation UpdateApplicationStart(
    $condition: ModelApplicationStartConditionInput
    $input: UpdateApplicationStartInput!
  ) {
    updateApplicationStart(condition: $condition, input: $input) {
      createdAt
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const updateAristosForm = /* GraphQL */ `
  mutation UpdateAristosForm(
    $condition: ModelAristosFormConditionInput
    $input: UpdateAristosFormInput!
  ) {
    updateAristosForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $condition: ModelArticleConditionInput
    $input: UpdateArticleInput!
  ) {
    updateArticle(condition: $condition, input: $input) {
      content
      createdAt
      id
      media
      relatedCourses {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      seoImage
      slug
      subhead
      tags
      title
      updatedAt
    }
  }
`;
export const updateArticleRelatedCourses = /* GraphQL */ `
  mutation UpdateArticleRelatedCourses(
    $condition: ModelArticleRelatedCoursesConditionInput
    $input: UpdateArticleRelatedCoursesInput!
  ) {
    updateArticleRelatedCourses(condition: $condition, input: $input) {
      article {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      articleId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $condition: ModelAuthorConditionInput
    $input: UpdateAuthorInput!
  ) {
    updateAuthor(condition: $condition, input: $input) {
      company
      createdAt
      headshot
      id
      linkedIn
      name
      templates {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      title
      updatedAt
    }
  }
`;
export const updateAuthorTemplates = /* GraphQL */ `
  mutation UpdateAuthorTemplates(
    $condition: ModelAuthorTemplatesConditionInput
    $input: UpdateAuthorTemplatesInput!
  ) {
    updateAuthorTemplates(condition: $condition, input: $input) {
      author {
        company
        createdAt
        headshot
        id
        linkedIn
        name
        templates {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        title
        updatedAt
      }
      authorId
      createdAt
      id
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $condition: ModelBlogConditionInput
    $input: UpdateBlogInput!
  ) {
    updateBlog(condition: $condition, input: $input) {
      author
      content
      createdAt
      date
      id
      media
      slug
      tags
      title
      updatedAt
    }
  }
`;
export const updateBoschForm = /* GraphQL */ `
  mutation UpdateBoschForm(
    $condition: ModelBoschFormConditionInput
    $input: UpdateBoschFormInput!
  ) {
    updateBoschForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      topicFour
      topicOne
      topicThree
      topicTwo
      updatedAt
    }
  }
`;
export const updateCMPMForm = /* GraphQL */ `
  mutation UpdateCMPMForm(
    $condition: ModelCMPMFormConditionInput
    $input: UpdateCMPMFormInput!
  ) {
    updateCMPMForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cMPMFormUserId
      city
      cmpmGoals
      companyName
      companyTitle
      country
      createdOn
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const updateCMPMSession = /* GraphQL */ `
  mutation UpdateCMPMSession(
    $condition: ModelCMPMSessionConditionInput
    $input: UpdateCMPMSessionInput!
  ) {
    updateCMPMSession(condition: $condition, input: $input) {
      createdAt
      deadline
      endDate
      id
      startDate
      title
      updatedAt
    }
  }
`;
export const updateCPSForm = /* GraphQL */ `
  mutation UpdateCPSForm(
    $condition: ModelCPSFormConditionInput
    $input: UpdateCPSFormInput!
  ) {
    updateCPSForm(condition: $condition, input: $input) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cPSFormUserId
      city
      companyName
      companyTitle
      country
      cpsGoals
      createdOn
      elective
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const updateCareer = /* GraphQL */ `
  mutation UpdateCareer(
    $condition: ModelCareerConditionInput
    $input: UpdateCareerInput!
  ) {
    updateCareer(condition: $condition, input: $input) {
      altName
      apcCopy
      beverageCopy
      cmpmCopy
      coreCopy
      cpsCopy
      createdAt
      dayInLife {
        items {
          careerDayInLifeId
          createdAt
          desc
          icon
          id
          name
          updatedAt
        }
        nextToken
      }
      electiveCopy
      freeCopy
      id
      media
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const updateCertAppStart = /* GraphQL */ `
  mutation UpdateCertAppStart(
    $condition: ModelCertAppStartConditionInput
    $input: UpdateCertAppStartInput!
  ) {
    updateCertAppStart(condition: $condition, input: $input) {
      country
      createdAt
      email
      firstName
      id
      ipAddress
      lastName
      phone
      source
      sourceUrl
      type
      updatedAt
    }
  }
`;
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $condition: ModelCertificateConditionInput
    $input: UpdateCertificateInput!
  ) {
    updateCertificate(condition: $condition, input: $input) {
      brochure_link
      ceus_total
      courses {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      courses_total
      createdAt
      demoLink
      hours_total
      id
      lmsLink
      price_features
      price_full
      price_monthly
      slug
      title
      title_button_1_link
      title_button_1_text
      title_button_2_link
      title_button_2_text
      title_callout_1
      title_callout_2
      title_image
      title_text
      updatedAt
      video
      whoText
    }
  }
`;
export const updateCertificateCourses = /* GraphQL */ `
  mutation UpdateCertificateCourses(
    $condition: ModelCertificateCoursesConditionInput
    $input: UpdateCertificateCoursesInput!
  ) {
    updateCertificateCourses(condition: $condition, input: $input) {
      certificate {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      certificateId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const updateCirriculumCourses = /* GraphQL */ `
  mutation UpdateCirriculumCourses(
    $condition: ModelCirriculumCoursesConditionInput
    $input: UpdateCirriculumCoursesInput!
  ) {
    updateCirriculumCourses(condition: $condition, input: $input) {
      createdAt
      id
      lMSCirriculum {
        Courses {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        description
        id
        shorthand
        slug
        title
        updatedAt
      }
      lMSCirriculumId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const updateClick = /* GraphQL */ `
  mutation UpdateClick(
    $condition: ModelClickConditionInput
    $input: UpdateClickInput!
  ) {
    updateClick(condition: $condition, input: $input) {
      createdAt
      id
      identifier
      ipAddress
      location
      nextPath
      path
      ref
      type
      updatedAt
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $condition: ModelCompanyConditionInput
    $input: UpdateCompanyInput!
  ) {
    updateCompany(condition: $condition, input: $input) {
      Employees {
        items {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      apsID {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      city
      createdAt
      email
      id
      name
      phone
      state
      street_1
      street_2
      updatedAt
      website
      zip
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $condition: ModelCourseConditionInput
    $input: UpdateCourseInput!
  ) {
    updateCourse(condition: $condition, input: $input) {
      articles {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      category
      certificate {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      hour
      id
      lessons
      media
      price
      slug
      subhead
      title
      updatedAt
      video
      videos
    }
  }
`;
export const updateCourseClick = /* GraphQL */ `
  mutation UpdateCourseClick(
    $condition: ModelCourseClickConditionInput
    $input: UpdateCourseClickInput!
  ) {
    updateCourseClick(condition: $condition, input: $input) {
      country
      courseID
      createdAt
      format
      id
      ipAddress
      lat
      long
      nextPath
      page
      referrer
      updatedAt
    }
  }
`;
export const updateCourseInstructors = /* GraphQL */ `
  mutation UpdateCourseInstructors(
    $condition: ModelCourseInstructorsConditionInput
    $input: UpdateCourseInstructorsInput!
  ) {
    updateCourseInstructors(condition: $condition, input: $input) {
      createdAt
      id
      instructor {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      instructorId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const updateCourseLessons = /* GraphQL */ `
  mutation UpdateCourseLessons(
    $condition: ModelCourseLessonsConditionInput
    $input: UpdateCourseLessonsInput!
  ) {
    updateCourseLessons(condition: $condition, input: $input) {
      createdAt
      id
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      lMSLesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      lMSLessonId
      updatedAt
    }
  }
`;
export const updateCourseSearch = /* GraphQL */ `
  mutation UpdateCourseSearch(
    $condition: ModelCourseSearchConditionInput
    $input: UpdateCourseSearchInput!
  ) {
    updateCourseSearch(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      term
      updatedAt
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $condition: ModelCustomerConditionInput
    $input: UpdateCustomerInput!
  ) {
    updateCustomer(condition: $condition, input: $input) {
      courses {
        items {
          clicks
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      displayName
      email
      highlightColor
      id
      link
      logo
      offered
      offerings
      pdf
      primaryColor
      pscourses {
        items {
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      slide
      status
      updatedAt
      video
    }
  }
`;
export const updateCustomerLibary = /* GraphQL */ `
  mutation UpdateCustomerLibary(
    $condition: ModelCustomerLibaryConditionInput
    $input: UpdateCustomerLibaryInput!
  ) {
    updateCustomerLibary(condition: $condition, input: $input) {
      addOns
      clientCourses
      createdAt
      description
      displayName
      email
      highlightColor
      id
      link
      logo
      pdf
      primaryColor
      pschoolCourses
      slide
      slug
      status
      updatedAt
      video
    }
  }
`;
export const updateDayInLifeItem = /* GraphQL */ `
  mutation UpdateDayInLifeItem(
    $condition: ModelDayInLifeItemConditionInput
    $input: UpdateDayInLifeItemInput!
  ) {
    updateDayInLifeItem(condition: $condition, input: $input) {
      careerDayInLifeId
      createdAt
      desc
      icon
      id
      name
      updatedAt
    }
  }
`;
export const updateGuardianForm = /* GraphQL */ `
  mutation UpdateGuardianForm(
    $condition: ModelGuardianFormConditionInput
    $input: UpdateGuardianFormInput!
  ) {
    updateGuardianForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const updateIncludedCourse = /* GraphQL */ `
  mutation UpdateIncludedCourse(
    $condition: ModelIncludedCourseConditionInput
    $input: UpdateIncludedCourseInput!
  ) {
    updateIncludedCourse(condition: $condition, input: $input) {
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const updateIndexRow = /* GraphQL */ `
  mutation UpdateIndexRow(
    $condition: ModelIndexRowConditionInput
    $input: UpdateIndexRowInput!
  ) {
    updateIndexRow(condition: $condition, input: $input) {
      content
      createdAt
      headline
      id
      subhead
      templates {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const updateIndexTemplate = /* GraphQL */ `
  mutation UpdateIndexTemplate(
    $condition: ModelIndexTemplateConditionInput
    $input: UpdateIndexTemplateInput!
  ) {
    updateIndexTemplate(condition: $condition, input: $input) {
      authors {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      rows {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const updateIndexTemplateRows = /* GraphQL */ `
  mutation UpdateIndexTemplateRows(
    $condition: ModelIndexTemplateRowsConditionInput
    $input: UpdateIndexTemplateRowsInput!
  ) {
    updateIndexTemplateRows(condition: $condition, input: $input) {
      createdAt
      id
      indexRow {
        content
        createdAt
        headline
        id
        subhead
        templates {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        type
        updatedAt
      }
      indexRowId
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const updateInstructor = /* GraphQL */ `
  mutation UpdateInstructor(
    $condition: ModelInstructorConditionInput
    $input: UpdateInstructorInput!
  ) {
    updateInstructor(condition: $condition, input: $input) {
      coursesTaught {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      instructor {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      updatedAt
      userId
    }
  }
`;
export const updateLMSCirriculum = /* GraphQL */ `
  mutation UpdateLMSCirriculum(
    $condition: ModelLMSCirriculumConditionInput
    $input: UpdateLMSCirriculumInput!
  ) {
    updateLMSCirriculum(condition: $condition, input: $input) {
      Courses {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      description
      id
      shorthand
      slug
      title
      updatedAt
    }
  }
`;
export const updateLMSCollection = /* GraphQL */ `
  mutation UpdateLMSCollection(
    $condition: ModelLMSCollectionConditionInput
    $input: UpdateLMSCollectionInput!
  ) {
    updateLMSCollection(condition: $condition, input: $input) {
      category
      collectionId
      courses
      createdAt
      description
      hours
      id
      instructor
      instructorDescription
      instructorImage
      instructorLink
      lmsLink
      price
      slug
      subtitle
      title
      updatedAt
    }
  }
`;
export const updateLMSCourse = /* GraphQL */ `
  mutation UpdateLMSCourse(
    $condition: ModelLMSCourseConditionInput
    $input: UpdateLMSCourseInput!
  ) {
    updateLMSCourse(condition: $condition, input: $input) {
      altLink
      category
      categoryArray
      cirriculum {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      collection
      courseId
      createdAt
      demo
      hours
      id
      infoSheet
      instructors {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      lessons
      link
      lmsLessons {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      objectives
      partOf
      percentComplete
      preview
      price
      seoImage
      shortDescription
      slug
      studentCourseEnrolledId
      subheadline
      title
      trial_link
      type
      updatedAt
      videos
      what_learned
    }
  }
`;
export const updateLMSLesson = /* GraphQL */ `
  mutation UpdateLMSLesson(
    $condition: ModelLMSLessonConditionInput
    $input: UpdateLMSLessonInput!
  ) {
    updateLMSLesson(condition: $condition, input: $input) {
      content
      course {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      media
      modules {
        items {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        nextToken
      }
      objectives
      percentComplete
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const updateLMSModule = /* GraphQL */ `
  mutation UpdateLMSModule(
    $condition: ModelLMSModuleConditionInput
    $input: UpdateLMSModuleInput!
  ) {
    updateLMSModule(condition: $condition, input: $input) {
      content
      createdAt
      id
      lMSLessonModulesId
      lMSModuleQuizId
      lesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      media
      mediaType
      objectives
      quiz {
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        id
        lMSQuizModuleId
        module {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        prompt
        updatedAt
      }
      slides {
        items {
          createdAt
          description
          id
          lMSModuleSlidesId
          slideSource
          updatedAt
        }
        nextToken
      }
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const updateLMSQuiz = /* GraphQL */ `
  mutation UpdateLMSQuiz(
    $condition: ModelLMSQuizConditionInput
    $input: UpdateLMSQuizInput!
  ) {
    updateLMSQuiz(condition: $condition, input: $input) {
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      id
      lMSQuizModuleId
      module {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      prompt
      updatedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $condition: ModelLessonConditionInput
    $input: UpdateLessonInput!
  ) {
    updateLesson(condition: $condition, input: $input) {
      actionCTA
      actionExample
      actionLink
      actionLinkTitle
      actionSubhead
      author
      backdate
      content
      createdAt
      createdBy
      featured
      id
      lastEditedBy
      links {
        items {
          createdAt
          id
          lessonLinksId
          link
          name
          updatedAt
        }
        nextToken
      }
      media
      mediaType
      objectives
      related
      screengrab
      seoImage
      slides
      slug
      sources {
        items {
          createdAt
          id
          lessonSourcesId
          link
          name
          position
          updatedAt
        }
        nextToken
      }
      status
      subhead
      tags {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      title
      type
      updatedAt
      videoLink
    }
  }
`;
export const updateLessonClick = /* GraphQL */ `
  mutation UpdateLessonClick(
    $condition: ModelLessonClickConditionInput
    $input: UpdateLessonClickInput!
  ) {
    updateLessonClick(condition: $condition, input: $input) {
      LessonID
      country
      createdAt
      format
      id
      ipAddress
      lat
      long
      page
      referrer
      updatedAt
    }
  }
`;
export const updateLessonLink = /* GraphQL */ `
  mutation UpdateLessonLink(
    $condition: ModelLessonLinkConditionInput
    $input: UpdateLessonLinkInput!
  ) {
    updateLessonLink(condition: $condition, input: $input) {
      createdAt
      id
      lessonLinksId
      link
      name
      updatedAt
    }
  }
`;
export const updateLessonSource = /* GraphQL */ `
  mutation UpdateLessonSource(
    $condition: ModelLessonSourceConditionInput
    $input: UpdateLessonSourceInput!
  ) {
    updateLessonSource(condition: $condition, input: $input) {
      createdAt
      id
      lessonSourcesId
      link
      name
      position
      updatedAt
    }
  }
`;
export const updateLessonTags = /* GraphQL */ `
  mutation UpdateLessonTags(
    $condition: ModelLessonTagsConditionInput
    $input: UpdateLessonTagsInput!
  ) {
    updateLessonTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      lessonId
      tags {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      tagsId
      updatedAt
    }
  }
`;
export const updateMorrisetteForm = /* GraphQL */ `
  mutation UpdateMorrisetteForm(
    $condition: ModelMorrisetteFormConditionInput
    $input: UpdateMorrisetteFormInput!
  ) {
    updateMorrisetteForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      preference
      title
      updatedAt
    }
  }
`;
export const updateObjective = /* GraphQL */ `
  mutation UpdateObjective(
    $condition: ModelObjectiveConditionInput
    $input: UpdateObjectiveInput!
  ) {
    updateObjective(condition: $condition, input: $input) {
      completed
      createdAt
      id
      objective
      updatedAt
    }
  }
`;
export const updateSalesBar = /* GraphQL */ `
  mutation UpdateSalesBar(
    $condition: ModelSalesBarConditionInput
    $input: UpdateSalesBarInput!
  ) {
    updateSalesBar(condition: $condition, input: $input) {
      createdAt
      icon
      id
      link
      text
      type
      updatedAt
    }
  }
`;
export const updateSalesbarClick = /* GraphQL */ `
  mutation UpdateSalesbarClick(
    $condition: ModelSalesbarClickConditionInput
    $input: UpdateSalesbarClickInput!
  ) {
    updateSalesbarClick(condition: $condition, input: $input) {
      country
      createdAt
      id
      ipAddress
      link
      page
      updatedAt
    }
  }
`;
export const updateSlide = /* GraphQL */ `
  mutation UpdateSlide(
    $condition: ModelSlideConditionInput
    $input: UpdateSlideInput!
  ) {
    updateSlide(condition: $condition, input: $input) {
      createdAt
      description
      id
      lMSModuleSlidesId
      slideSource
      updatedAt
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $condition: ModelStaffConditionInput
    $input: UpdateStaffInput!
  ) {
    updateStaff(condition: $condition, input: $input) {
      createdAt
      fullName
      id
      image
      linkedIn
      title
      updatedAt
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $condition: ModelStudentConditionInput
    $input: UpdateStudentInput!
  ) {
    updateStudent(condition: $condition, input: $input) {
      courseEnrolled {
        items {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        nextToken
      }
      createdAt
      id
      student {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      studentId
      updatedAt
    }
  }
`;
export const updateSurgereForm = /* GraphQL */ `
  mutation UpdateSurgereForm(
    $condition: ModelSurgereFormConditionInput
    $input: UpdateSurgereFormInput!
  ) {
    updateSurgereForm(condition: $condition, input: $input) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const updateTags = /* GraphQL */ `
  mutation UpdateTags(
    $condition: ModelTagsConditionInput
    $input: UpdateTagsInput!
  ) {
    updateTags(condition: $condition, input: $input) {
      createdAt
      id
      lesson {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      tag
      updatedAt
    }
  }
`;
export const updateTestimonial = /* GraphQL */ `
  mutation UpdateTestimonial(
    $condition: ModelTestimonialConditionInput
    $input: UpdateTestimonialInput!
  ) {
    updateTestimonial(condition: $condition, input: $input) {
      affiliation
      author
      company
      content
      createdAt
      date
      featured
      headshot
      id
      linkedin
      tags
      title
      updatedAt
      video
    }
  }
`;
export const updateTimestamp = /* GraphQL */ `
  mutation UpdateTimestamp(
    $condition: ModelTimestampConditionInput
    $input: UpdateTimestampInput!
  ) {
    updateTimestamp(condition: $condition, input: $input) {
      createdAt
      description
      id
      time
      updatedAt
    }
  }
`;
export const updateTourist = /* GraphQL */ `
  mutation UpdateTourist(
    $condition: ModelTouristConditionInput
    $input: UpdateTouristInput!
  ) {
    updateTourist(condition: $condition, input: $input) {
      company
      createdAt
      email
      fullName
      id
      phone
      tour
      updatedAt
    }
  }
`;
export const updateTrackedCourse = /* GraphQL */ `
  mutation UpdateTrackedCourse(
    $condition: ModelTrackedCourseConditionInput
    $input: UpdateTrackedCourseInput!
  ) {
    updateTrackedCourse(condition: $condition, input: $input) {
      clicks
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $condition: ModelUserConditionInput
    $input: UpdateUserInput!
  ) {
    updateUser(condition: $condition, input: $input) {
      apss {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      bio
      cell
      cmpmForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cMPMFormUserId
        city
        cmpmGoals
        companyName
        companyTitle
        country
        createdOn
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cmpmFormID
      company
      companyID
      cpsForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cPSFormUserId
        city
        companyName
        companyTitle
        country
        cpsGoals
        createdOn
        elective
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cpsFormID
      createdAt
      email
      id
      instructorId {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      linkedin
      name
      office
      picture
      savedArticles
      savedCourses
      savedLessons
      source
      studentId {
        courseEnrolled {
          items {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          nextToken
        }
        createdAt
        id
        student {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        studentId
        updatedAt
      }
      title
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const updateWorkshopForm = /* GraphQL */ `
  mutation UpdateWorkshopForm(
    $condition: ModelWorkshopFormConditionInput
    $input: UpdateWorkshopFormInput!
  ) {
    updateWorkshopForm(condition: $condition, input: $input) {
      audienceSize
      companyName
      createdOn
      email
      eventDate
      eventDescription
      eventLocation
      firstName
      id
      lastName
      phone
      updatedOn
    }
  }
`;
