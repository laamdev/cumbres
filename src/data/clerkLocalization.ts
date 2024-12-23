import type { LocalizationResource } from "@clerk/types";

const commonTexts = {
  signIn: {
    phoneCode: {
      title: "Revisa tu teléfono",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Código de verificación",
      formSubtitle:
        "Introduzca el código de verificación enviado a su número de teléfono",
      resendButton: "Reenviar código",
    },
  },
} as const;

export const esES: LocalizationResource = {
  socialButtonsBlockButton: "Continuar con {{provider|titleize}}",
  dividerText: "o",
  formFieldLabel__emailAddress: "Correo electrónico",
  formFieldLabel__emailAddresses: "Direcciones de correo",
  formFieldLabel__phoneNumber: "Número telefónico",
  formFieldLabel__username: "Nombre de usuario",
  formFieldLabel__emailAddress_username:
    "Correo electrónico o nombre de usuario",
  formFieldLabel__password: "Contraseña",
  formFieldLabel__currentPassword: "Contraseña actual",
  formFieldLabel__newPassword: "Nueva contraseña",
  formFieldLabel__confirmPassword: "Confirme la contraseña",
  formFieldLabel__signOutOfOtherSessions:
    "Cerrar sesión en todos los demás dispositivos",
  formFieldLabel__firstName: "Nombre",
  formFieldLabel__lastName: "Apellidos",
  formFieldLabel__backupCode: "Código de respaldo",
  formFieldLabel__organizationName: "Nombre de la Organización",
  formFieldLabel__role: "Rol",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddresses:
    "Ingrese o pegue una o más direcciones de correo electrónico, separadas por espacios o comas",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldAction__forgotPassword: "Has olvidado tu contraseña",
  formFieldHintText__optional: "Opcional",
  formButtonPrimary: "Continuar",
  signInEnterPasswordTitle: "Ingresa tu contraseña",
  backButton: "Atrás",
  footerActionLink__useAnotherMethod: "Usar otro método",
  badge__primary: "Primario",
  badge__thisDevice: "Este dispositivo",
  badge__userDevice: "Dispositivo de usuario",
  badge__otherImpersonatorDevice: "Otro dispositivo de imitación",
  badge__default: "Por defecto",
  badge__unverified: "No confirmado",
  badge__requiresAction: "Requiere acción",
  badge__you: "Usted",
  footerPageLink__help: "Ayuda",
  footerPageLink__privacy: "Privacidad",
  footerPageLink__terms: "Términos",
  paginationButton__previous: "Previo",
  paginationButton__next: "Próximo",
  paginationRowText__displaying: "Mostrando",
  paginationRowText__of: "de",
  membershipRole__admin: "Administrador",
  membershipRole__basicMember: "Miembro",
  membershipRole__guestMember: "Invitado",
  signUp: {
    start: {
      title: "Crea tu cuenta",
      subtitle: "para continuar a {{applicationName}}",
      actionText: "¿Tienes una cuenta?",
      actionLink: "Inicia Sesión",
    },
    emailLink: {
      title: "Verifica tu correo electrónico",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Enlace de verificación",
      formSubtitle:
        "Utilice el enlace de verificación enviado a su dirección de correo electrónico",
      resendButton: "Reenviar enlace",
      verified: {
        title: "Registrado con éxito",
      },
      loading: {
        title: "Registrando...",
      },
      verifiedSwitchTab: {
        title: "Correo electrónico verificado con éxito",
        subtitle: "Regrese a la pestaña recién abierta para continuar",
        subtitleNewTab: "Volver a la pestaña anterior para continuar",
      },
    },
    emailCode: {
      title: "Verifique su correo electrónico",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Código de verificación",
      formSubtitle:
        "Introduzca el código de verificación enviado a su correo electrónico",
      resendButton: "Re-enviar código",
    },
    phoneCode: {
      title: "Verifique su teléfono",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Código de verificación",
      formSubtitle:
        "Introduzca el código de verificación enviado a su número de teléfono",
      resendButton: "Re-enviar código",
    },
    continue: {
      title: "Rellene los campos que faltan",
      subtitle: "para continuar a {{applicationName}}",
      actionText: "¿Tiene una cuenta?",
      actionLink: "Inicia Sesión",
    },
  },
  signIn: {
    start: {
      title: "Inicia Sesión",
      subtitle: "para continuar a {{applicationName}}",
      actionText: "¿No tienes cuenta?",
      actionLink: "Regístrate",
    },
    password: {
      title: "Introduce tu contraseña",
      subtitle: "para continuar a {{applicationName}}",
      actionLink: "Usa otro método",
    },
    emailCode: {
      title: "Revisa tu correo electrónico",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Código de verificación",
      resendButton: "Re-enviar código",
    },
    emailLink: {
      title: "Revise su correo electrónico",
      subtitle: "para continuar a {{applicationName}}",
      formTitle: "Enlace de verificación",
      formSubtitle:
        "Utilice el enlace de verificación enviado a su correo electrónico",
      resendButton: "Reenviar enlace",
      unusedTab: {
        title: "Puede cerrar esta pestaña",
      },
      verified: {
        title: "Inició sesión con éxito",
        subtitle: "Serás redirigido pronto",
      },
      verifiedSwitchTab: {
        subtitle: "Regrese a la pestaña original para continuar",
        titleNewTab: "Inició sesión en otra pestaña",
        subtitleNewTab: "Regrese a la pestaña recién abierta para continuar",
      },
      loading: {
        title: "Iniciando sesión...",
        subtitle: "Serás redirigido pronto",
      },
      failed: {
        title: "Este enlace de verificación es invalido",
        subtitle: "Regrese a la pestaña original para continuar.",
      },
      expired: {
        title: "Este enlace de verificación ha expirado",
        subtitle: "Regrese a la pestaña original para continuar.",
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
    totpMfa: {
      title: "Verificación de dos pasos",
      subtitle: "",
      formTitle: "Código de verificación",
    },
    backupCodeMfa: {
      title: "Introduce un código de seguridad",
      subtitle: "para continuar a {{applicationName}}",
    },
    alternativeMethods: {
      title: "Usa otro método",
      actionLink: "Consigue ayuda",
      blockButton__emailLink: "Enviar enlace a{{identifier}}",
      blockButton__emailCode: "Enviar código a{{identifier}}",
      blockButton__phoneCode: "Enviar código a{{identifier}}",
      blockButton__password: "Entra con tu contraseña",
      blockButton__totp: "Usa tu aplicación de autenticación",
      blockButton__backupCode: "Usa un código de respaldo",
      getHelp: {
        title: "Consigue ayuda",
        content: `Si tiene dificultades para iniciar sesión en su cuenta, envíenos un correo electrónico y trabajaremos con usted para restablecer el acceso lo antes posible.`,
        blockButton__emailSupport: "Soporte de correo electrónico",
      },
    },
    noAvailableMethods: {
      title: "No puedo iniciar sesión",
      subtitle: "Ocurrió un error",
      message:
        "No se puede continuar con el inicio de sesión. No hay ningún factor de autenticación disponible.",
    },
  },
  userProfile: {
    mobileButton__menu: "Menú",
    formButtonPrimary__continue: "Continuar",
    formButtonPrimary__finish: "Terminar",
    formButtonReset: "Cancelar",
    start: {
      headerTitle__account: "Cuenta",
      headerTitle__security: "Seguridad",
      profileSection: {
        title: "Perfil",
      },
      usernameSection: {
        title: "Nombre de usuario",
        primaryButton__updateUsername: "Cambiar nombre de usuario",
        primaryButton__setUsername: "Crear nombre de usuario",
      },
      emailAddressesSection: {
        title: "Correos electrónicos",
        primaryButton: "Agregar una dirección de correo electrónico",
        detailsAction__primary: "Completar la verificación",
        detailsAction__nonPrimary: "Establecer como primario",
        detailsAction__unverified: "Completar la verificación",
        destructiveAction: "Eliminar dirección de correo electrónico",
      },
      phoneNumbersSection: {
        title: "Números telefónicos",
        primaryButton: "Agregar un número de teléfono",
        detailsAction__primary: "Completar la verificación",
        detailsAction__nonPrimary: "Establecer como primario",
        detailsAction__unverified: "Completar la verificación",
        destructiveAction: "Quitar número de teléfono",
      },
      connectedAccountsSection: {
        title: "Cuentas conectadas",
        primaryButton: "Conectar cuenta",
        actionLabel__connectionFailed: "Inténtelo nuevamente",
        destructiveActionTitle: "Quitar",
      },
      passwordSection: {
        title: "Contraseña",
        primaryButton__setPassword: "Establecer contraseña ",
      },
      mfaSection: {
        title: "Verificación de dos pasos",
        primaryButton: "Añadir verificación de dos pasos",
        phoneCode: {
          destructiveActionLabel: "Eliminar número telefónico",
          actionLabel__setDefault: "Establecer por defecto",
        },
        backupCodes: {
          headerTitle: "Códigos de respaldo",
          title__regenerate: "Regenerar códigos de respaldo",
          subtitle__regenerate:
            "Obtenga un nuevo conjunto de códigos de respaldo seguros. Los códigos de respaldo anteriores se eliminarán y no podrán ser usados.",
          actionLabel__regenerate: "Regenerar códigos",
        },
        totp: {
          headerTitle: "Aplicación de autenticación",
          destructiveActionTitle: "Eliminar",
        },
      },
      activeDevicesSection: {
        title: "Dispositivos activos",
        destructiveAction: "Cerrar sesión en el dispositivo",
      },
      web3WalletsSection: {
        title: "Web3 cartera",
        primaryButton: "Web3 cartera",
        destructiveAction: "Quitar cartera",
      },
    },
    profilePage: {
      title: "Actualizar Cuenta",
      imageFormTitle: "Imagen de perfil",
      imageFormSubtitle: "Cargar imagen",
      imageFormDestructiveActionSubtitle: "Eliminar la imagen",
      fileDropAreaHint:
        "Cargue una imagen JPG, PNG, GIF o WEBP de menos de 10 MB",
      successMessage: "Tu perfil ha sido actualizado.",
    },
    usernamePage: {
      successMessage: "Su nombre de usuario ha sido actualizado.",
    },
    emailAddressPage: {
      title: "Agregar dirección de correo electrónico",
      emailCode: {
        formHint:
          "A esta dirección de correo electrónico se le enviará un correo electrónico con un Código de verificación.",
        formTitle: "Código de verificación",
        formSubtitle:
          "Introduzca el código de verificación enviado a {{identifier}}",
        resendButton: "Re-enviar código",
        successMessage:
          "El correo electrónico {{identifier}} se ha agregado a su cuenta.",
      },
      emailLink: {
        formHint:
          "Se enviará un correo electrónico con un enlace de verificación a esta dirección de correo electrónico.",
        formTitle: "Enlace de verificación",
        formSubtitle:
          "Haga clic en el enlace de verificación en el correo electrónico enviado a {{identifier}}",
        resendButton: "Reenviar enlace",
        successMessage:
          "El correo electrónico {{identifier}} se ha agregado a su cuenta.",
      },
      removeResource: {
        title: "Eliminar dirección de correo electrónico",
        messageLine1: "{{identifier}} será eliminado de esta cuenta.",
        messageLine2:
          "Ya no podrá iniciar sesión con esta dirección de correo electrónico.",
        successMessage: "{{emailAddress}} ha sido eliminado de su cuenta.",
      },
    },
    phoneNumberPage: {
      title: "Agregar el número de teléfono",
      successMessage: "{{identifier}} ha sido añadido a tu cuenta.",
      infoText:
        "Se enviará un mensaje de texto con un enlace de verificación a este número de teléfono.",
      removeResource: {
        title: "Eliminar número de teléfono",
        messageLine1: "{{identifier}} será eliminado de esta cuenta.",
        messageLine2: "Ya no podrá iniciar sesión con este número de teléfono.",
        successMessage: "{{phoneNumber}} ha sido eliminado de su cuenta.",
      },
    },
    connectedAccountPage: {
      title: "Agregar cuenta conectada",
      formHint: "Seleccione un proveedor para conectar su cuenta.",
      formHint__noAccounts:
        "No hay proveedores de cuentas externas disponibles.",
      socialButtonsBlockButton: "Conectar {{provider|titleize}} cuenta",
      successMessage: "El proveedor ha sido agregado a su cuenta",
      removeResource: {
        title: "Eliminar cuenta conectada",
        messageLine1: "{{identifier}} será eliminado de esta cuenta.",
        messageLine2:
          "Ya no podrá usar esta cuenta activa y las funciones dependientes ya no funcionarán.",
        successMessage: "{{connectedAccount}} ha sido eliminado de su cuenta.",
      },
    },
    web3WalletPage: {
      title: "Añadir web3 billetera",
      subtitle__availableWallets:
        "Seleccione una billetera web3 para conectarse a su cuenta.",
      subtitle__unavailableWallets: "No hay billetera web3 disponibles.",
      successMessage: "La billetera ha sido agregada a su cuenta.",
      removeResource: {
        title: "Eliminar la billetera web3",
        messageLine1: "{{identifier}} será eliminado de esta cuenta.",
        messageLine2: "Ya no podrá iniciar sesión con esta billetera web3.",
        successMessage: "{{web3Wallet}} ha sido eliminado de su cuenta.",
      },
    },
    mfaPhoneCodePage: {
      title: "Agregar verificación de código SMS",
      primaryButton__addPhoneNumber: "Agregar un número de teléfono",
      subtitle__availablePhoneNumbers:
        "Seleccione un número de teléfono para registrarse para la verificación en dos pasos del código SMS.",
      subtitle__unavailablePhoneNumbers:
        "No hay números de teléfono disponibles para registrarse para la verificación en dos pasos del código SMS.",
      removeResource: {
        title: "Eliminar la verificación en dos pasos",
        messageLine1:
          "{{identifier}} dejará de recibir el Código de verificación al iniciar sesión.",
        messageLine2:
          "Es posible que su cuenta no sea tan segura. Estás seguro de que quieres continuar?",
        successMessage:
          "Se eliminó la verificación de dos pasos del código SMS para {{mfaPhoneCode}}",
      },
    },
    backupCodePage: {
      title: "Agregar verificación de código de respaldo",
      title__codelist: "Códigos de respaldo",
      subtitle__codelist: "Guardelos de forma segura y manténgalos en secreto.",
      infoText1: "Se habilitarán códigos de respaldo para esta cuenta.",
      infoText2:
        "Mantenga los códigos de respaldo en secreto y guárdelos de forma segura. Puede regenerar códigos de respaldo si sospecha que se han visto comprometidos.",
      successSubtitle:
        "Puede usar uno de estos para iniciar sesión en su cuenta, si pierde el acceso a su dispositivo de autenticación.",
      successMessage:
        "Los códigos de respaldo ahora están habilitados. Puede usar uno de estos para iniciar sesión en su cuenta, si pierde el acceso a su dispositivo de autenticación. Cada código solo se puede utilizar una vez.",
      actionLabel__copy: "Copiar todo",
      actionLabel__copied: "Copiado!",
      actionLabel__download: "Descargar .txt",
      actionLabel__print: "Imprimir",
    },
  },
  userButton: {
    action__manageAccount: "Administrar cuenta",
    action__signOut: "Cerrar sesión",
    action__signOutAll: "Salir de todas las cuentas",
    action__addAccount: "Añadir cuenta",
  },
  organizationSwitcher: {
    personalWorkspace: "Espacio de trabajo personal",
    notSelected: "Ninguna organización seleccionada",
    action__createOrganization: "Crear Organización",
    action__manageOrganization: "Administrar Organización",
  },
  impersonationFab: {
    title: "Registrado como {{identifier}}",
    action__signOut: "Cerrar",
  },
  organizationProfile: {
    start: {
      headerTitle__members: "Miembros",
    },
    profilePage: {
      title: "Perfil de la organización",
      successMessage: "La organización ha sido actualizada.",
      dangerSection: {
        title: "Peligro",
        leaveOrganization: {
          title: "Abandonar la organización",
          messageLine1:
            "¿Está seguro de que desea abandonar esta organización? Perderá el acceso a esta organización y sus aplicaciones.",
          messageLine2: "Esta acción es permanente e irreversible.",
          successMessage: "Has dejado la organización.",
        },
      },
    },
    invitePage: {
      title: "Invitar miembros",
      subtitle: "Invitar nuevos miembros a esta organización",
      successMessage: "Invitaciones enviadas con éxito",
      detailsTitle__inviteFailed:
        "No se pudieron enviar las invitaciones. Solucione lo siguiente y vuelva a intentarlo:",
      formButtonPrimary__continue: "Enviar invitaciones",
    },
    membersPage: {
      detailsTitle__emptyRow: "No hay miembros para mostrar",
      action__invite: "Invitar",
      activeMembersTab: {
        tableHeader__user: "Usuario",
        tableHeader__joined: "Unido",
        tableHeader__role: "Rol",
        tableHeader__actions: "",
        menuAction__remove: "Quitar miembro",
      },
      invitedMembersTab: {
        tableHeader__invited: "Invitado",
        menuAction__revoke: "Revocar invitación",
      },
    },
  },
  createOrganization: {
    title: "Crear organización",
    formButtonSubmit: "Crear organización",
    invitePage: {
      formButtonReset: "Saltar",
    },
  },
  unstable__errors: {
    form_identifier_not_found: "",
    form_password_pwned: "",
    form_username_invalid_length: "",
    form_param_format_invalid: "",
    form_password_length_too_short: "",
    form_param_nil: "",
    form_code_incorrect: "",
    form_password_incorrect: "",
    not_allowed_access: "",
    form_identifier_exists: "",
    passwordComplexity: {
      sentencePrefix: "",
      minimumLength: "",
      maximumLength: "",
      requireNumbers: "",
      requireLowercase: "",
      requireUppercase: "",
      requireSpecialCharacter: "",
    },
    zxcvbn: {
      notEnough: "Tu contraseña no es lo suficientemente segura.",
      warnings: {
        straightRow:
          "Teclas consecutivas en tu teclado son fáciles de adivinar.",
        keyPattern: "Patrones cortos son fáciles de adivinar.",
        simpleRepeat: 'Caracteres repetidos como "aaa" son fáciles de adivinar',
        extendedRepeat:
          'Patrones repetidos como "abcabcabc" son fáciles de adivinar.',
        sequences: 'Patrones comunes como "abc" son fáciles de adivinar',
        recentYears: "Los años recientes son fáciles de adivinar.",
        dates: "Las fechas son fáciles de adivinar.",
        topTen: "Es de las contraseñas más usadas.",
        topHundred: "Es una contraseña usada con mucha frecuencia.",
        common: "Es una contraseña usada comúnmente.",
        similarToCommon: "Es similar a una contraseña usada habitualmente.",
        wordByItself: "Palabras únicas son fáciles de adivinar.",
        namesByThemselves:
          "Nombres o apellidos a solas son fáciles de adivinar.",
        commonNames: "Nombre y apellidos comunes son fáciles de adivinar.",
        userInputs:
          "No debería haber datos personales o relacionados con esta página.",
        pwned:
          "Su contraseña fue expuesta por una violación de datos en Internet.",
      },
      suggestions: {
        l33t: "Evita sustituciones predecibles como '@' por '@'",
        reverseWords: "Evita palabras comunes escritas al revés",
        allUppercase:
          "Escribe en mayúsculas algunas, pero no todas las letras.",
        capitalization:
          "Escribe en mayúsculas alguna letra más además de la primera.",
        dates: "Evita fechas que estén asociadas contigo.",
        recentYears: "Evita años recientes.",
        associatedYears: "Evita años asociados contigo.",
        sequences: "Evita secuencias de letras comunes.",
        repeated: "Evitas palabras y letras repetidas.",
        longerKeyboardPattern:
          "Usa patrones de teclado más largos y cambia la dirección de escritura varias veces.",
        anotherWord: "Añade más palabras que sean menos comunes.",
        useWords: "Usa varias palabras, pero evita frases comunes.",
        noNeed:
          "Puedes crear contraseñas seguras sin usar símbolos, números o mayúsculas.",
        pwned: "Si utiliza esta contraseña en otro lugar, debería cambiarla.",
      },
    },
  },
  dates: {
    previous6Days:
      "Último {{ date | weekday('es-ES','long') }} en {{ date | timeString('es-ES') }}",
    lastDay: "Ayer a las {{ date | timeString('es-ES') }}",
    sameDay: "Hoy a las {{ date | timeString('es-ES') }}",
    nextDay: "Mañana a las {{ date | timeString('es-ES') }}",
    next6Days:
      "{{ date | weekday('es-ES','long') }} a las {{ date | timeString('es-ES') }}",
    numeric: "{{ date | numeric('es-ES') }}",
  },
} as const;
