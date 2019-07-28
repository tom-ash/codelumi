// import { predefinedFurnishingOptionsGetter } from '../components/___furnishings/constants/options'
// import { predefinedFeatureOptionsGetter } from '../components/___features/constants/options'
// import { apiUrl } from '../../../../../constants/urls'

// export function aeReadyExistingAnnouncement(existingAnnouncementId) {
//     const uaTokens = this.props.appTokensHandler()
//     fetch(apiUrl + '/getexistingannouncementforediting', {
//       headers: {
//        'Content-Type': 'application/json',
//        'announcementId': existingAnnouncementId,
//        'accessToken': uaTokens['accessToken'],
//        'verificationToken': uaTokens['verificationToken']
//       }
//     })
//     .then(response => {
//       if (response.status == 200) {
//         return response.json()
//       }
//     })
//     .then(jsonResponse => {
//       const aePicturesInStateFromAWS = jsonResponse.aePicturesInState
//       aePicturesInStateFromAWS.forEach((file, index) => {
//         fetch(apiUrl + '/obtainawss3presignedgeturl', {
//           headers: {
//            key: 'announcements/' + existingAnnouncementId + '/' + jsonResponse.aePicturesInState[index]
//           }
//         })
//         .then(response => {
//           if (response.ok) {
//             return response.json()
//           }
//         })
//         .then(jsonResponse => {
//           fetch(jsonResponse.presignedGetUrl, {
//           })
//           .then(response => {
//             if (response.ok) {
//               return response.blob()
//             }
//           })
//           .then(blobResponse => {
//             let blob = window.URL.createObjectURL(blobResponse)
//             let newaePicturesInState = this.state.aePicturesInState    
//             newaePicturesInState[index] = {
//              blobName: blob,
//              dataBaseName: file
//             }
//             this.setState({
//               aePicturesInState: newaePicturesInState
//             })
//           })
//         })
//       })
//       return jsonResponse
//     })
//     .then(jsonResponse => {
//       this.aePredefinedElementsFactory(jsonResponse.aePrimaryDataCategory, jsonResponse.aeFeaturesSelected, jsonResponse.aeFurnishingsSelected)
//       let aePrimaryDataAvailabilityDate
//       if (jsonResponse.aePrimaryDataAvailabilityDate == 'AlreadyAvailable') {
//         aePrimaryDataAvailabilityDate = jsonResponse.aePrimaryDataAvailabilityDate
//       } else {
//         let month = jsonResponse.aePrimaryDataAvailabilityDate.slice(5,7)
//         let day = jsonResponse.aePrimaryDataAvailabilityDate.slice(8,10)
//         if (month[0] == '0') {
//           month = month.slice(1,2)
//         }
//         if (day[0] == '0') {
//           day = day.slice(1,2)
//         }
//         aePrimaryDataAvailabilityDate = {
//          year: jsonResponse.aePrimaryDataAvailabilityDate.slice(0,4),
//          month: month,
//          day: day
//         }
//       }
//       this.setState({
//        aePrimaryDataCategory: jsonResponse.aePrimaryDataCategory,
//        aePrimaryDataDistrict: jsonResponse.aePrimaryDataDistrict,
//        aePrimaryDataRentHeight: jsonResponse.aePrimaryDataRentHeight,
//        aePrimaryDataRentCurrency: jsonResponse.aePrimaryDataRentCurrency,
//        aePrimaryDataAdditionalFees: jsonResponse.aePrimaryDataAdditionalFees,
//        aePrimaryDataArea: jsonResponse.aePrimaryDataArea,
//        aePrimaryDataAvailabilityStatus: jsonResponse.aePrimaryDataAvailabilityStatus,
//        aePrimaryDataAvailabilityDate: aePrimaryDataAvailabilityDate,
//        aeSecondaryDataFloor: jsonResponse.aeSecondaryDataFloor,
//        aeSecondaryDataTotalFloors: jsonResponse.aeSecondaryDataTotalFloors,
//        aeFeaturesSelected: jsonResponse.aeFeaturesSelected,
//        aeFurnishingsSelected: jsonResponse.aeFurnishingsSelected,
//        aeDescriptionPolish: jsonResponse.aeDescriptionPolish,
//        aeDescriptionEnglish: jsonResponse.aeDescriptionEnglish,
//        aeMapLatitude: jsonResponse.aeMapLatitude,
//        aeMapLongitude: jsonResponse.aeMapLongitude,
//        //TODO
//        aePicturesShowcaseIndex: jsonResponse.aePicturesShowcaseIndex,
//       })
//       this.categoryManager('setValue')
//       this.districtManager('setValue')
//       this.rentCurrencyManager('setValue')
//       this.additionalFeesManager('setValue')
//       this.rentManger('setValue')
//       this.areaManager('setValue')
//       this.avialbilityDateMonthManager('setValue')
//       if (jsonResponse.aePrimaryDataAvailabilityStatus === 'ProvideAvailabilityDate') {
//         this.avialbilityDateYearManager('setValue')
//         this.aePrimaryDataAvailabilityMonthHandler('setValue')
//         this.avialbilityDateDayManager('setValue')
//       }
//       if (jsonResponse.aeSecondaryDataRooms > 0) {
//         if (jsonResponse.aeSecondaryDataRooms <= 10) {
//           this.setState({
//             aeSecondaryDataRoomsSelectInput: jsonResponse.aeSecondaryDataRooms
//           })
//           this.aeSecondaryDataRoomsHandler('setValue')
//         } else {
//           this.setState({
//             aeSecondaryDataRoomsSelectInput: -1,
//             aeSecondaryDataRoomsManualInput: jsonResponse.aeSecondaryDataRooms
//           })
//           this.aeSecondaryDataRoomsHandler('setValue')
//           this.aeSecondaryDataRoomsManualInputHandler('setValue')
//         }
//       }
//       this.aeSecondaryDataFloorHandler('setValue')
//       this.aeSecondaryDataTotalFloorsHandler('setValue')
//       this.aeDescriptionPolishVersionHandler('setValue')
//       this.aeDescriptionEnglishVersionHandler('setValue')
//     })
//   }

//   export function aePredefinedElementsFactory(announcementCategory, addedAnnouncementFeatures, addedAnnouncementFurnishings) {
//     let newPredefinedFeatureOptions
//     let newPredefinedFurnishingOptions
//     if (announcementCategory == 1) {
//       newPredefinedFeatureOptions = predefinedFeatureOptionsGetter("0", this.props.language)
//       newPredefinedFurnishingOptions = predefinedFurnishingOptionsGetter("0", this.props.language)
//     } else if (announcementCategory == 2) {
//       newPredefinedFeatureOptions = predefinedFeatureOptionsGetter("1", this.props.language)
//       newPredefinedFurnishingOptions = predefinedFurnishingOptionsGetter("1", this.props.language)
//     } else if (announcementCategory == 3) {
//       newPredefinedFeatureOptions = predefinedFeatureOptionsGetter("2", this.props.language)
//       newPredefinedFurnishingOptions = predefinedFurnishingOptionsGetter("2", this.props.language)
//     } else if (announcementCategory == 4) {
//       newPredefinedFeatureOptions = predefinedFeatureOptionsGetter("3", this.props.language)
//       newPredefinedFurnishingOptions = predefinedFurnishingOptionsGetter("3", this.props.language)
//     } else {
//       newPredefinedFeatureOptions = predefinedFeatureOptionsGetter(undefined, this.props.language)
//       newPredefinedFurnishingOptions = predefinedFurnishingOptionsGetter()
//     }
//     if (addedAnnouncementFeatures) {
//       newPredefinedFeatureOptions = newPredefinedFeatureOptions.filter((element) => {
//         let elementFound = true
//         addedAnnouncementFeatures.map((newElement) => {
//           if (newElement.english == element.english) {
//             elementFound = false
//           }
//         })
//         return elementFound
//         }
//       )
//     }
//     if (addedAnnouncementFurnishings) {
//       newPredefinedFurnishingOptions = newPredefinedFurnishingOptions.filter((element) => {
//         let elementFound = true
//         addedAnnouncementFurnishings.map((newElement) => {
//           if (newElement.english == element.english) {
//             elementFound = false
//           }
//         })
//         return elementFound
//         }
//       )
//     }
//     this.setState({
//       predefinedFeatureOptions: newPredefinedFeatureOptions,
//       predefinedFurnishingOptions: newPredefinedFurnishingOptions
//     })
//   }