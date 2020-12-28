import {
  VISITOR_PRIVACY_SETTINGS,
  VISITOR_COOKIES_POLICY,
  VISITOR_PRIVACY_POLICY,
  VISITOR_TERMS_OF_SERVICE,
  VISITOR_CONTACT,
  PAGE_CREATE,
  PAGE_INDEX_MAP,
  ANNOUNCEMENT_CREATE,
  ANNOUNCEMENT_INDEX_MAP,
  ANNOUNCEMENT_INDEX_CATALOGUE,
  ANNOUNCEMENT_INDEX_MY,
  USER_CREATE,
  USER_AUTHORIZE,
  USER_RESET_PASSWORD,
  USER_EDIT,
  USER_SHOW
} from '../tracks/tracks'

export const routeRenderStates = {
  [VISITOR_PRIVACY_SETTINGS]: {
    visitor: {
      control: {
        render: true,
        renderSections: {
          settings: true
        }
      }
    }
  },
  [VISITOR_COOKIES_POLICY]: {
    visitor: {
      control: {
        render: true,
        renderSections: {
          cookiesPolicy: true
        }
      }
    }
  },
  [VISITOR_PRIVACY_POLICY]: {
    visitor: {
      control: {
        render: true,
        renderSections: {
          privacyPolicy: true
        }
      }
    }
  },
  [VISITOR_TERMS_OF_SERVICE]: {
    visitor: {
      control: {
        render: true,
        renderSections: {
          termsOfService: true
        }
      }
    } 
  },
  [VISITOR_CONTACT]: {
    visitor: {
      control: {
        render: true,
        renderSections: {
          contact: true
        }
      }
    }
  },
  [PAGE_CREATE]: {
    page: {
      control: {
        render: true
      },
      create: {
        control: {
          render: true
        }
      }
    }
  },
  [PAGE_INDEX_MAP]: {
    page: {
      control: {
        render: true
      },
      index: {
        control: {
          render: true,
          renderSections: {
            map: true
          }
        }
      }
    }
  },
  [ANNOUNCEMENT_CREATE]: {
    announcement: {
      control: {
        render: true
      },
      create: {
        control: {
          render: true
        }
      }
    }
  },
  [ANNOUNCEMENT_INDEX_MAP]: {
    announcement: {
      control: {
        render: true
      },
      index: {
        control: {
          render: true
        },
        map: {
          control: {
            render: true
          }
        }
      }
    }
  },
  [ANNOUNCEMENT_INDEX_CATALOGUE]: {
    announcement: {
      control: {
        render: true
      },
      index: {
        control: {
          render: true
        },
        catalogue: {
          control: {
            render: true
          }
        }
      }
    }
  },
  [ANNOUNCEMENT_INDEX_MY]: {
    announcement: {
      control: {
        render: true
      },
      index: {
        control: {
          render: true
        },
        my: {
          control: {
            render: true
          }
        }
      }
    }
  },
  [USER_CREATE]: {
    user: {
      control: {
        render: true
      },
      create: {
        control: {
          render: true
        }
      }
    }
  },
  [USER_AUTHORIZE]: {
    user: {
      control: {
        render: true
      },
      authorize: {
        control: {
          render: true
        }
      }
    }
  },
  [USER_RESET_PASSWORD]: {
    user: {
      control: {
        render: true
      },
      edit: {
        control: {
          render: true,
          renderSections: {
            resetPassword: true
          }
        }
      }
    }
  },
  [USER_EDIT]: {
    user: {
      control: {
        render: true
      },
      edit: {
        control: {
          render: true
        }
      }
    }
  },
  [USER_SHOW]: {
    user: {
      control: {
        render: true
      },
      show: {
        control: {
          render: true
        }
      }
    }
  }
}
