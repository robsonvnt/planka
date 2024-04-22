import dateFns from 'date-fns/locale/sk';

export default {
  dateFns,

  format: {
    date: 'd.M.yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'v' p",
    fullDate: 'd MMM y',
    fullDateTime: "d MMMM y 'v' p",
  },

  translation: {
    common: {
      account: 'Účet',
      actions: 'Akcia',
      addAttachment_title: 'Pridať prílohu',
      addComment: 'Pridať komentár',
      addManager_title: 'Pridať správcu',
      addMember_title: 'Pridať člena',
      addUser_title: 'Pridať používateľa',
      administrator: 'Administrátor',
      all: 'Všetko',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Všetky zmeny budú automaticky uložené<br />po obnovení spojenia.',
      areYouSureYouWantToDeleteThisAttachment: 'Naozaj chcete zmazať túto prílohu?',
      areYouSureYouWantToDeleteThisBoard: 'Naozaj chcete zmazať túto tabuľu?',
      areYouSureYouWantToDeleteThisCard: 'Naozaj chcete zmazať túto kartu?',
      areYouSureYouWantToDeleteThisComment: 'Naozaj chcete zmazať tento komentár?',
      areYouSureYouWantToDeleteThisLabel: 'Naozaj chcete zmazať tento štítok?',
      areYouSureYouWantToDeleteThisList: 'Naozaj chcete zmazať tento zoznam?',
      areYouSureYouWantToDeleteThisProject: 'Naozaj chcete zmazať tento projekt?',
      areYouSureYouWantToDeleteThisTask: 'Naozaj chcete zmazať túto úlohu?',
      areYouSureYouWantToDeleteThisUser: 'Naozaj chcete zmazať tohoto používateľa?',
      areYouSureYouWantToLeaveBoard: 'Naozaj chcete opustiť túto tabuľu?',
      areYouSureYouWantToLeaveProject: 'Naozaj chcete opustiť tento projekt?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Naozaj chcete zmazať daného správcu tohto projektu?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Naozaj chcete odstrániť tohoto člena z tabule?',
      attachment: 'Príloha',
      attachments: 'Prílohy',
      authentication: 'Overenie',
      background: 'Pozadie',
      board: 'Tabuľa',
      boardNotFound_title: 'Tabuľa neexistuje',
      cardActions_title: 'Akcie na karte',
      cardNotFound_title: 'Karta neexistuje',
      cardOrActionAreDeleted: 'Karta alebo akcia sú zmazané.',
      color: 'Farba',
      createBoard_title: 'Vytvoriť tabuľu',
      createLabel_title: 'Vytvoriť štítok',
      createNewOneOrSelectExistingOne: 'Vytvoriť nový alebo vyberte<br />už existujúci.',
      createProject_title: 'Vytvoriť projekt',
      createTextFile_title: 'Vytvoriť textový súbor',
      currentPassword: 'Aktuálne heslo',
      dangerZone_title: 'Nebezpečná zóna',
      date: 'Dátum',
      dueDate_title: 'Termín do',
      deleteAttachment_title: 'Zmazať prílohu',
      deleteBoard_title: 'Zmazať tabuľu',
      deleteCard_title: 'Zmazať kartu',
      deleteComment_title: 'Zmazať komentár',
      deleteLabel_title: 'Zmazať štítok',
      deleteList_title: 'Zmazať zoznam',
      deleteProject_title: 'Zmazať projekt',
      deleteTask_title: 'Zmazať úlohu',
      deleteUser_title: 'Zmazať používateľa',
      description: 'Popis',
      dropFileToUpload: 'Potiahnutím nahraj súbor',
      editAttachment_title: 'Upraviť prílohu',
      editAvatar_title: 'Upraviť avatar',
      editBoard_title: 'Upraviť tabuľu',
      editDueDate_title: 'Upraviť Termín do',
      editEmail_title: 'Upraviť e-mail',
      editInformation_title: 'Upraviť informácie',
      editLabel_title: 'Upraviť štítok',
      editPassword_title: 'Upraviť heslo',
      editStopwatch_title: 'Upraviť časovač',
      editUsername_title: 'Upraviť používateľské meno',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail je už použitý',
      enterCardTitle: 'Vlož názov karty...',
      enterDescription: 'Vlož popis...',
      enterFilename: 'Vlož názov súboru',
      enterListTitle: 'Vlož názov zoznamu...',
      enterProjectTitle: 'Vlož názov projektu',
      enterTaskDescription: 'Vlož popis úlohy...',
      filterByLabels_title: 'Filtruj podľa štítku',
      filterByMembers_title: 'Filtruj podľa člena',
      fromComputer_title: 'Z počítača',
      general: 'Všeobecné',
      hours: 'Hodiny',
      invalidCurrentPassword: 'Neplatné aktuálne heslo',
      labels: 'Štítky',
      leaveBoard_title: 'Opustiť tabuľu',
      leaveProject_title: 'Opustiť projekt',
      list: 'Zoznam',
      listActions_title: 'Zoznam akcií',
      managers: 'Správcovia',
      members: 'Členovia',
      minutes: 'Minúty',
      moveCard_title: 'Presunúť kartu',
      name: 'Meno',
      newEmail: 'Nový e-mail',
      newPassword: 'Nové heslo',
      newUsername: 'Nové používateľské meno',
      noConnectionToServer: 'Nie je spojenie k serveru',
      noBoards: 'Žiadne tabule',
      noLists: 'Žiadne zoznamy',
      noProjects: 'Žiadne projekty',
      notifications: 'Oznámenia',
      noUnreadNotifications: 'Žiadne neprečítané oznámenia.',
      openBoard_title: 'Otvoriť tabuľu',
      optional_inline: 'voliteľné',
      organization: 'Spoločnosť',
      phone: 'Telefón',
      preferences: 'Voľby',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tip: stlačte Ctrl-V (Cmd-V na Mac) pre vloženie prílohy zo schránky.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt neexistuje',
      removeManager_title: 'Odstrániť správcu',
      removeMember_title: 'Odstrániť člena',
      seconds: 'Sekúnd',
      selectBoard: 'Vybrať tabuľu',
      selectList: 'Vybrať zoznam',
      selectProject: 'Vybrať projekt',
      settings: 'Nastavenia',
      stopwatch: 'Časovač',
      subscribeToMyOwnCardsByDefault: 'Predvolene odoberať vlastné karty',
      taskActions_title: 'Akcie na úlohe',
      tasks: 'Úlohy',
      time: 'Čas',
      title: 'Názov',
      userActions_title: 'Akcie na používateľovi',
      userAddedThisCardToList: '<0>{{user}}</0><1> pridal kartu do {{list}}</1>',
      userLeftNewCommentToCard: '{{user}} zanechal nový komentár «{{comment}}» k <2>{{card}}</2>',
      userMovedCardFromListToList: '{{user}} presunul <2>{{card}}</2> z {{fromList}} do {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> presunul túto kartu z {{fromList}} do {{toList}}</1>',
      username: 'Používateľské meno',
      usernameAlreadyInUse: 'Používateľské meno je zabrané',
      users: 'Používatelia',
      writeComment: 'Napísať komentár...',
    },

    action: {
      addAnotherCard: 'Pridať ďalšiu kartu',
      addAnotherList: 'Pridať ďalší zoznam',
      addAnotherTask: 'Pridať ďalšiu úlohu',
      addCard: 'Pridať kartu',
      addCard_title: 'Pridať kartu',
      addComment: 'Pridať komentár',
      addList: 'Pridať zoznam',
      addMoreDetailedDescription: 'Pridať ďalší detailný popis',
      addTask: 'Pridať úlohu',
      addToCard: 'Pridať na kartu',
      addUser: 'Pridať používateľa',
      createBoard: 'Vytvoriť tabuľu',
      createFile: 'Vytvoriť súbor',
      createLabel: 'Vytvoriť štítok',
      createNewLabel: 'Vytvoriť nový štítok',
      createProject: 'Vytvoriť projekt',
      archive: 'Archivovať',
      delete: 'Zmazať',
      deleteAttachment: 'Zmazať prílohu',
      deleteAvatar: 'Zmazať avatar',
      deleteBoard: 'Zmazať tabuľu',
      deleteCard: 'Zmazať kartu',
      deleteCard_title: 'Zmazať kartu',
      deleteComment: 'Zmazať komentár',
      deleteImage: 'Zmazať obrázok',
      deleteLabel: 'Zmazať štítok',
      deleteList: 'Zmazať zoznam',
      deleteList_title: 'Zmazať zoznam',
      deleteProject: 'Zmazať projekt',
      deleteProject_title: 'Zmazať projekt',
      deleteTask: 'Zmazať úlohu',
      deleteTask_title: 'Zmazať úlohu',
      deleteUser: 'Zmazať používateľa',
      edit: 'Upraviť',
      editDueDate_title: 'Upraviť termín do',
      editDescription_title: 'Upraviť popis',
      editEmail_title: 'Upraviť e-mail',
      editInformation_title: 'Upraviť informácie',
      editPassword_title: 'Upraviť heslo',
      editStopwatch_title: 'Upraviť časovač',
      editTitle_title: 'Upraviť názov',
      editUsername_title: 'Upraviť používateľské meno',
      leaveBoard: 'Opustiť tabuľu',
      leaveProject: 'Opustiť projekt',
      logOut_title: 'Odhlásiť sa',
      makeCover_title: 'Vytvoriť obal',
      move: 'Presunúť',
      moveCard_title: 'Presunúť kartu',
      remove: 'Odstrániť',
      removeBackground: 'Odstrániť pozadie',
      removeCover_title: 'Odstrániť obal',
      removeFromBoard: 'Odstrániť z tabule',
      removeFromProject: 'Odstrániť z projektu',
      removeManager: 'Odstrániť správcu',
      removeMember: 'Odstrániť člena',
      save: 'Uložiť',
      showAllAttachments: 'Zozbraziť všetky prílohy ({{hidden}} skryté)',
      showFewerAttachments: 'Zobraziť menej príloh',
      start: 'Start',
      stop: 'Stop',
      subscribe: 'Odoberať',
      unsubscribe: 'Neodoberať',
      uploadNewAvatar: 'Nahrať nový avatar',
      uploadNewImage: 'Nahrať nový obrázok',
    },
  },
};
