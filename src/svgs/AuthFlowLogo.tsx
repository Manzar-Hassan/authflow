"use client";

interface SvgProps {
  height?: number;
  width?: number;
}

const AuthFlowSvg = ({ height = 100, width = 100 }: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={height} height={width}>
    <path
      fill="#E9EAED"
      d="M344 336h24v2h8v2h4v2h4v2h2v2h6v4h4v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v4h4v4h4v4h4v2h4v2h4v2h4v2h4v2h8v2h8v2h434v2h4v2h6v2h2v2h4v2h2v2h2v4h2v4h2v6h2v26h2v110h-2v8h-2v4h-2v4h-2v2h-2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-8v2h-26v2h-56v-2H442v2h-12v2h-4v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v2h-4v2h-4v2h-4v2h-8v2h-6v2h-30v-2h-8v-2h-10v-2h-2v-2h-6v-2h-2v-2h-4v-2h-2v-2h-4v-2h-4v-2h-2v-2h-2v-2h-2v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-4v-2h-4v-2h-2v-2h-16v-2H140v-2h-14v-2h-4v-2h-4v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-8h-2v-12h-2V436h2v-10h2v-8h2v-2h2v-4h2v-2h2v-2h2v-2h2v-2h2v-2h2v-2h4v-2h6v-2h4v-2h124v-2h6v-2h8v-2h4v-2h2v-2h4v-2h2v-2h2v-2h2v-2h2v-4h2v-2h2v-2h2v-2h2v-4h4v-4h4v-4h4v-2h2v-2h4v-2h2v-2h4v-2h2v-2h6v-2h4v-2h10v-2Z"
    />
    <path
      fill="#142848"
      d="M728.484 452.207c11.772 8.39 19.974 18.597 23.516 32.793 2.166 14.703-1.521 27.866-9.813 40.063-5.803 7.361-12.72 12.111-21.187 15.937l-1.793 1.043c-9.69 4.201-25.447 3.444-35.207-.043-14.604-6.596-24.816-17.22-30.82-32.022-2.02-5.512-2.727-10.5-2.68-16.353l.015-2.515c.197-6.942 1.742-12.207 5.485-18.11l1.527-2.484c1.431-2.229 2.901-4.385 4.473-6.516l1.813-2.477c16.16-18.642 44.146-22.387 64.671-9.316ZM766.852 442.266c3.183 1.088 4.224 3.007 6.148 5.734 1.4 3.207 1.4 3.207 2.656 6.813l.694 1.97c.726 2.069 1.438 4.143 2.15 6.217.477 1.361.955 2.722 1.434 4.082a543.917 543.917 0 0 1 7.226 22.167c1.262 4.134 2.683 8.21 4.106 12.29C792 504 792 504 792 507h2l-.135-2.636c.144-3.596.902-5.886 2.291-9.188a225.467 225.467 0 0 0 5.563-15.383l.69-2.13c.937-2.889 1.87-5.78 2.789-8.674 6.89-21.657 6.89-21.657 14.802-25.989 3.563-.063 3.563-.063 7 1 3.72 3.783 5.282 7.941 6.84 12.906l.754 2.307c.791 2.426 1.568 4.856 2.343 7.287 1.025 3.179 2.057 6.355 3.09 9.531l.756 2.334c1.878 5.75 3.979 11.367 6.257 16.972 1.295 3.592 1.736 6.863 1.96 10.663h2l.536-2.039a304.916 304.916 0 0 1 5.898-19.414l.967-2.862c.67-1.977 1.341-3.953 2.014-5.93a2453.89 2453.89 0 0 0 3.048-9.036l1.97-5.797.904-2.703c4.517-13.146 4.517-13.146 8.663-15.219 4.458-.514 6.501-.305 10.375 2.063 3.213 3.595 3.424 5.16 3.625 9.937-.633 3.137-1.669 6.083-2.754 9.09l-.903 2.613c-.954 2.75-1.93 5.492-2.905 8.235-.63 1.807-1.258 3.615-1.885 5.423a1080.4 1080.4 0 0 1-10.35 28.434c-1.965 5.235-3.68 10.534-5.351 15.87l-1.29 4.023-1.183 3.761c-1.64 4.223-3.52 8.14-7.192 10.926-3.196.913-5.882.92-9.187.625-3.806-2.157-4.876-4.446-6.313-8.5l-1.269-3.504-.682-1.93a506.968 506.968 0 0 0-2.435-6.656c-3.152-8.477-6.22-16.98-9.235-25.508a111.548 111.548 0 0 0-2.879-7.09C822 488 822 488 822 485h-2l-.325 2.511c-.764 3.948-2.044 7.568-3.476 11.31l-.841 2.241c-.885 2.357-1.777 4.71-2.67 7.063a5392.89 5392.89 0 0 0-4.338 11.512 338.077 338.077 0 0 0-5.545 16.055c-1.121 3.215-2.1 5.188-4.805 7.308-3.085 1.015-5.767 1.36-9 1-8.725-5.552-11.9-20.77-15.25-30l-.712-1.952c-4.614-12.65-8.912-25.398-13.095-38.197-.847-2.561-1.72-5.11-2.611-7.656l-.729-2.1c-.603-1.727-1.214-3.452-1.826-5.177-1.053-3.956-1.561-7.251.22-11.035 3.61-4.405 6.154-5.657 11.855-5.617Z"
    />
    <path
      fill="#162949"
      d="M490 444c2.81 2.278 3.849 3.547 5 7 .117 2.721.178 5.418.193 8.14l.025 2.514c.024 2.747.041 5.494.055 8.24l.017 2.845c.026 4.967.046 9.934.06 14.9.013 4.11.041 8.22.082 12.33.05 4.964.074 9.927.081 14.89.007 1.891.022 3.781.046 5.671.032 2.648.032 5.294.024 7.942l.05 2.357c-.046 4.01-.475 6.47-3.011 9.656C490 543 490 543 487.465 543.762c-.834-.025-1.668-.05-2.527-.074l-2.536.011c-3.525-1.026-4.464-2.605-6.402-5.699-.343-2.99-.47-5.604-.39-8.582l.012-2.189c.02-2.68.076-5.361.128-8.042L476 501h-44c.118 10.92.118 10.92.27 21.838.009 1.38.017 2.76.023 4.139l.046 2.131c.003 4.72-.878 7.873-3.339 11.892-2.37 2.37-3.063 2.345-6.313 2.438l-2.3.12c-3.678-.86-5.052-2.63-7.387-5.558-.495-3.04-.686-5.516-.647-8.55l-.027-2.574c-.021-2.802-.007-5.602.01-8.403-.003-1.952-.008-3.903-.015-5.855-.007-4.088.004-8.175.027-12.263.029-5.234.012-10.466-.018-15.7-.018-4.03-.012-8.059 0-12.088.004-1.93 0-3.859-.011-5.788-.013-2.7.006-5.399.034-8.1l-.03-2.403c.076-4.05.505-6.56 3.073-9.773C418 444 418 444 420.316 443.273c6.06.274 6.06.274 9.184 2.54 2.738 3.993 2.618 7.32 2.598 12.042l-.008 3.67-.027 4.663L432 481h44c-.198-10.68-.198-10.68-.45-21.36-.015-1.344-.028-2.687-.038-4.03l-.078-2.098c-.003-3.735.265-5.202 2.909-7.925 4.314-2.577 6.825-2.869 11.657-1.587Z"
    />
    <path
      fill="#14284A"
      d="m250.5 443.313 2.219-.012c3.45 1.057 5.524 2.592 7.281 5.699.732 4.355.625 8.672.566 13.078l.028 5.874c.01 3.433-.013 6.865-.031 10.298-.019 4.082-.03 8.164-.01 12.247.008 2.539 0 5.077-.03 7.616.024 8.083.961 14.714 6.293 21.043l1.747 1.344 1.753 1.406c5.386 3.5 12.555 2.563 18.684 2.094 5.17-1.257 8.027-3.593 10.938-8 2.651-4.602 3.186-8.505 3.188-13.79l.012-3.53.003-3.801.042-5.922c.038-4.864.07-9.728.067-14.592 0-2.731.012-5.462.04-8.193.025-2.57.031-5.142.017-7.713.135-9.658.135-9.658 3.092-12.744 2.64-1.741 3.971-2.419 7.101-2.402l2.219-.075c2.783.93 4.384 2.309 6.206 4.592 2.441 4.928 1.758 10.776 1.704 16.15 0 1.378.003 2.756.007 4.133a821.72 821.72 0 0 1-.04 8.652 765.355 765.355 0 0 0-.008 11c.01 2.846.001 5.692-.014 8.538-.007 2 0 4 .007 6-.168 13.231-3.795 22.79-13.085 32.224-10.274 9.211-22.173 10.144-35.303 9.612-10.292-.653-18.171-6.052-25.302-13.276-8.194-9.752-9.505-20.12-9.457-32.508a2860.4 2860.4 0 0 0-.02-4.147c-.01-2.875-.005-5.75.01-8.625.017-3.673-.007-7.345-.042-11.018-.022-2.845-.02-5.69-.012-8.537.001-2.008-.019-4.017-.04-6.025.104-10.118.104-10.118 3.067-13.83 2.664-2.224 3.689-2.975 7.103-2.86Z"
    />
    <path
      fill="#162948"
      d="m528.212 443.807 3.298-.049c4.973-.044 9.946-.085 14.92-.108a960.21 960.21 0 0 0 7.88-.082c3.78-.055 7.558-.077 11.338-.091l3.564-.07c8.138.022 8.138.022 11.525 2.997 1.82 3.739 2.215 6.536 1.263 10.596-2.149 2.886-3.644 4.605-7.14 5.623-3.818.503-7.599.5-11.442.475l-2.467-.005c-2.588-.005-5.176-.018-7.763-.03-1.76-.006-3.52-.01-5.28-.014-4.303-.01-8.605-.03-12.908-.049v17l7.262-.105c2.33-.024 4.66-.042 6.99-.06 1.615-.015 3.23-.035 4.844-.061 2.326-.037 4.652-.054 6.978-.067l2.176-.047c4.444-.001 7.233.584 10.75 3.34 2.492 3.737 2.458 5.573 2 10-2.08 3.226-3.8 4.867-7 7a90.407 90.407 0 0 1-7.512.195l-2.206-.008c-2.324-.011-4.646-.037-6.97-.062-1.576-.01-3.152-.02-4.728-.027-3.861-.022-7.723-.057-11.584-.098l.08 3.317c.09 4.072.147 8.144.195 12.216.025 1.761.059 3.521.102 5.282.061 2.534.09 5.068.111 7.603l.078 2.374c.003 4.3-.175 5.736-3.034 9.182L531 542l-1 1c-1.89.273-1.89.273-4.25.375l-2.328.148c-3.72-.803-5.072-2.577-7.422-5.523-.495-3.01-.686-5.453-.647-8.459l-.027-2.544c-.021-2.77-.007-5.537.01-8.306-.003-1.929-.008-3.858-.015-5.787-.007-4.04.004-8.081.027-12.122.029-5.173.012-10.345-.018-15.518-.018-3.983-.012-7.966 0-11.95.004-1.907 0-3.813-.011-5.72-.013-2.67.006-5.337.034-8.006l-.03-2.376c.11-5.708 1.59-8.218 5.677-12.212 2.542-1.27 4.367-1.155 7.212-1.193Z"
    />
    <path
      fill="#BEC0C9"
      d="M919 448h1v108h-2v8h-2v4h-2v4h-2v2h-2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-8v2h-26v2h-56v-2H442v2h-12v2h-4v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v2h-4v2h-4v2h-4v2h-8v2h-6v2h-30v-2h-8v-1a131.027 131.027 0 0 1 15.001-1.24c10.173-.297 19.293-1.753 28.999-4.76l3.82-1.164c6.25-2.057 11.35-4.209 16.399-8.445 1.828-1.428 3.536-2.278 5.656-3.203 4.721-2.184 8.131-5.666 11.828-9.262 2.305-1.932 3.471-2.28 6.297-2.926l2-3c2-3 2-3 4.25-3.875L420 591v-2h4v-2c9.19-2.832 17.776-3.43 27.342-3.385 1.52-.004 3.041-.01 4.562-.016 4.148-.014 8.295-.01 12.443-.002 4.484.004 8.969-.008 13.454-.019 7.76-.016 15.521-.021 23.282-.02 11.226.003 22.452-.013 33.678-.034a48193.953 48193.953 0 0 1 57.97-.07l13.245-.01a129946.555 129946.555 0 0 0 39.81-.034c18.166-.018 36.331-.044 54.497-.075 11.202-.018 22.404-.03 33.606-.03 7.667-.001 15.335-.01 23.002-.023 4.426-.007 8.852-.011 13.278-.007 4.049.005 8.098 0 12.147-.012 1.467-.003 2.934-.003 4.4.002 1.99.005 3.98-.003 5.97-.012l3.354-.002c3.025-.257 5.223-.972 7.96-2.251v2l5.894-.305c1.709-.09 3.417-.177 5.126-.265a794.76 794.76 0 0 0 12.851-.754l2.301-.153c1.436-.096 2.871-.198 4.306-.306 2.702-.179 5.158-.294 7.818.27 3.216.61 6.235.643 9.509.646l3.957.004 2.048-.007c2.052-.005 4.103 0 6.155.007l3.965-.004 3.6-.004c5.823-.217 9.892-.468 14.47-4.129 2.578-.73 2.578-.73 5.25-1.188l2.703-.48L900 576v-2h2v-2c1.875-2.125 1.875-2.125 4-4h2l.839-1.737C910 564 910 564 911.264 562.01c4.72-7.938 4.47-15.813 4.443-24.737.013-1.6.028-3.2.046-4.8.04-4.178.05-8.357.054-12.536.01-4.277.047-8.554.082-12.832.064-8.368.097-16.736.111-25.105h1l1 71 1-105Z"
    />
    <path
      fill="#DDE3EC"
      d="M717.336 468.23c7.643 5.077 11.785 11.134 14.664 19.77.87 11.105-.25 18.703-7.375 27.313-5.372 5.76-11.04 9.277-18.992 9.988-11.913.04-17.647-1.648-26.36-9.89-6.916-7.333-8.794-14.155-8.671-24.15 1.096-8.975 6.113-16.089 13.058-21.636 10.88-7.556 22.048-7.945 33.676-1.395Z"
    />
    <path
      fill="#14294D"
      d="M188.832 443.441c3.794.978 6.21 3.949 8.18 7.26.967 1.95 1.86 3.92 2.73 5.916l1.005 2.225c1.053 2.34 2.091 4.686 3.128 7.033l2.066 4.61c1.027 2.286 2.053 4.573 3.074 6.862a816.323 816.323 0 0 0 6.598 14.403c3.327 7.084 6.53 14.22 9.7 21.375l1.587 3.57c2.85 6.42 2.85 6.42 4.1 9.305l1.169 2.648c1.22 3.452.71 5.834-.169 9.352-1.5 2.938-1.5 2.938-4 5-3.146.723-5.89.892-9 0-5.656-4.17-7.68-10.36-10.313-16.688l-1.376-3.205C204 515.317 204 515.317 204 513l-3.188 2c-3.11 1.753-5.19 2.762-8.812 2-4.124-2.68-7.087-6.088-10-10v-3c2.595-1.298 4.542-1.133 7.438-1.125l2.933-.008C195 503 195 503 198 504l-.826-1.988a5164.8 5164.8 0 0 1-3.674-8.887l-1.3-3.129-1.231-2.988-1.143-2.761C189 482 189 482 189 480h-2l-.445 1.766c-1.979 7.231-5.046 13.626-8.555 20.234-3.952-1.622-6.79-4.318-9.813-7.25l-1.56-1.41c-1.459-1.418-1.459-1.418-3.627-4.34-.039-4.816 2.077-8.617 4.188-12.875 2.967-6.098 5.474-12.257 7.682-18.67 2.733-7.702 5.413-13.501 13.962-14.014Z"
    />
    <path
      fill="#132646"
      d="M348.094 443.406c1.393.002 2.786.002 4.18 0 2.915.002 5.83.02 8.745.052 3.73.04 7.457.044 11.187.037 2.876-.004 5.751.009 8.627.026 1.374.007 2.75.01 4.124.009 1.924.002 3.848.025 5.772.05l3.312.026c3.349.446 5.24 1.424 7.959 3.394 2.324 3.21 2.476 6.115 2 10-1.63 2.66-1.63 2.66-4 5-2.933.568-2.933.568-6.297.488l-3.652-.049-3.801-.127-3.848-.068A669.388 669.388 0 0 1 373 462l.027 2.858c.081 8.888.141 17.775.18 26.662.021 4.57.05 9.138.095 13.708.043 4.409.067 8.817.078 13.227.007 1.682.021 3.365.043 5.047.029 2.356.033 4.711.031 7.067l.044 2.11c-.03 3.377-.276 5.04-2.401 7.723-3.504 2.67-5.687 3.03-10.097 2.598-2.7-1.8-4.542-3.084-6-6-.093-2.38-.126-4.731-.114-7.112v-2.217c0-2.424.009-4.848.016-7.273l.005-5.036c.003-4.422.013-8.844.024-13.266.01-4.511.015-9.022.02-13.534.01-8.854.028-17.708.049-26.562l-1.956.063c-2.931.084-5.862.136-8.794.187l-3.078.102c-7.532.099-7.532.099-10.84-2.231-1.5-2.389-1.9-3.75-1.894-6.558l-.067-2.247c.713-2.625 1.696-4.359 3.67-6.244 4.746-2.596 10.779-1.734 16.053-1.666Z"
    />
    <path
      fill="#2A8EDC"
      d="M365 387c9.506 5.111 17.12 11.78 20.379 22.266 1.687 7.43.64 12.817-2.379 19.734h-2v2h-2v2c-6.796 2.184-13.184 2.338-20.278 2.316-2.085-.003-4.169.02-6.253.045-8.712.042-16.729-.24-23.844-5.736-6.619-6.619-7.018-13.218-7.078-22.193.119-5.345.807-8.804 4.605-12.791L328 393l2.004-1.953c9.757-9.109 22.937-9.472 34.996-4.047Z"
    />
    <path
      fill="#132746"
      d="M607 444c2.313 1.156 4.174 2.174 6 4 .095 2.373.126 4.717.114 7.09v2.247c0 2.462-.009 4.924-.016 7.386l-.005 5.107c-.003 4.49-.013 8.98-.024 13.47-.01 4.577-.015 9.155-.02 13.733-.01 8.99-.028 17.978-.049 26.967l3.21-.08c3.947-.09 7.893-.147 11.841-.195 1.706-.025 3.41-.059 5.116-.102 2.457-.061 4.914-.09 7.372-.111l2.292-.078c3.96-.003 6.473.39 9.655 2.85 2.722 2.941 3.189 4.565 3.213 8.556-1.13 3.492-2.753 6.015-5.699 8.16-3.83.888-7.587.794-11.504.727l-3.38.003a584.444 584.444 0 0 1-7.063-.058c-3.606-.047-7.21-.04-10.817-.027-2.288-.012-4.577-.026-6.865-.043l-3.27.005-3.045-.058-2.672-.028c-3.167-.692-4.367-2.034-6.384-4.521-1.241-3.723-1.156-7.186-1.161-11.064l-.015-2.49c-.015-2.718-.022-5.438-.027-8.157l-.017-5.668c-.01-3.963-.017-7.926-.02-11.889-.006-5.076-.03-10.152-.058-15.229-.019-3.903-.024-7.807-.026-11.71-.003-1.871-.01-3.743-.024-5.614a873.416 873.416 0 0 1-.008-7.856l-.028-2.34c.035-4.51.564-7.418 3.384-10.983 3.726-2.484 5.587-2.38 10-2Z"
    />
    <path
      fill="#0E5DC3"
      d="M150.922 468.344c4.32 1.364 9.83 3.408 13.078 6.656-.176 2.69-.618 5.329-1 8-4.755-.576-7.97-2.55-12-5 6.378 12.48 16.7 22.537 27.336 31.457 2.389 2.215 3.567 4.02 4.164 7.23-.726 4.813-2.79 8.15-6.5 11.313-3.724 1.056-6.914.434-10.5-1l-1.5-1-.125 2.375c-1.239 5.131-3.83 9.336-6.875 13.625-3.214 1.607-6.514 1.467-10 1-2.938-1.563-2.938-1.563-5-4-1.95-6.689.283-11.145 3-17.188.781-1.76 1.552-3.524 2.313-5.292l1.05-2.341c.74-2.534.588-3.739-.363-6.179-1.912-2.307-1.912-2.307-4.25-4.625-5.151-5.588-9.444-11.095-10-18.875 2.62-7.335 8.155-17.881 17.172-16.156Z"
    />
    <path
      fill="#72727C"
      d="M919 448h1v108h-2v8h-2v4h-2v4h-2v2h-2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-8v2h-26v2h-56v-2H442v-1l361-1v-1l2.93-.049c9.178-.156 18.356-.332 27.533-.526 4.717-.1 9.433-.192 14.15-.269 4.565-.074 9.13-.167 13.694-.272 1.729-.037 3.457-.067 5.186-.09 11.379-.161 21.59-1.53 32.507-4.794l1-5h2v-2c1.875-2.125 1.875-2.125 4-4h2l.839-1.737C910 564 910 564 911.264 562.01c4.72-7.938 4.47-15.813 4.443-24.737.013-1.6.028-3.2.046-4.8.04-4.178.05-8.357.054-12.536.01-4.277.047-8.554.082-12.832.064-8.368.097-16.736.111-25.105h1l1 71 1-105Z"
    />
    <path
      fill="#3995D3"
      d="M709.133 478.723c5.05 2.7 7.772 6.634 10.867 11.277.924 4.932.382 8.998-2.188 13.313-2.924 4.159-5.924 7.058-10.812 8.687-6.073.71-11.422 1.034-16.563-2.625-4.799-4.3-6.58-8.287-7.125-14.688.137-5.893 2.532-8.798 6.547-12.91 5.539-4.598 12.413-5.379 19.274-3.054Z"
    />
    <path
      fill="#0CA9F3"
      d="M150.922 468.344c4.32 1.364 9.83 3.408 13.078 6.656-.176 2.69-.618 5.329-1 8-4.755-.576-7.97-2.55-12-5l1.875 3.25 1.105 1.957a132.077 132.077 0 0 0 2.208 3.73c1.646 4.18 2.241 8.384 1.125 12.75-1.524 2.684-3.307 4.973-5.313 7.313l2 3-2 2a234.624 234.624 0 0 1-5-5l-1.938-1.984c-5.554-5.934-10.714-12.142-11.312-20.516 2.62-7.335 8.155-17.881 17.172-16.156Z"
    />
    <path
      fill="#B2B5C0"
      d="M900 577c-4.386 5.334-12.55 6.476-19.13 7.25-5.499.437-11.005.502-16.518.578-1.752.038-3.503.077-5.254.117-4.56.102-9.12.182-13.68.257-4.674.08-9.347.182-14.02.282A6539.5 6539.5 0 0 1 804 586v1c-20.73.032-41.458.051-62.188.063h-2.359c-48.903.027-97.801-.137-146.703-.563l-2.083-.018c-17.222-.15-34.445-.31-51.667-.482v-1l2.521-.013c20.735-.105 41.47-.214 62.205-.326 10.03-.054 20.059-.108 30.088-.158a35837.158 35837.158 0 0 0 85.286-.525c13.377-.096 26.753-.205 40.13-.334 3.862-.037 7.725-.07 11.588-.098 4.49-.033 8.982-.076 13.473-.126 1.642-.017 3.284-.03 4.927-.04 2.24-.015 4.479-.04 6.719-.07l3.791-.035c3.172-.267 5.415-.914 8.272-2.275v2l5.894-.305c1.709-.09 3.417-.177 5.126-.265a794.76 794.76 0 0 0 12.851-.754l2.301-.153c1.436-.096 2.871-.198 4.306-.306 2.702-.179 5.158-.294 7.818.27 3.216.61 6.235.643 9.509.646l3.957.004 2.048-.007c2.052-.005 4.103 0 6.155.007l3.965-.004 3.6-.004c5.912-.22 9.777-.574 14.47-4.129 7.086-2.457 7.086-2.457 10-1Z"
    />
    <path
      fill="#A6A9B0"
      d="m430 587 1 2h11v1h-12v2h-4v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2v2h-2v2h-2v2h-4v2h-2v2h-2v2h-4v2h-2v2h-4v2h-4v2h-4v2h-4v2h-8v2h-6v2h-30v-2h-8v-1a131.027 131.027 0 0 1 15.001-1.24c10.173-.297 19.293-1.753 28.999-4.76l3.82-1.164c6.25-2.057 11.35-4.209 16.399-8.445 1.828-1.428 3.536-2.278 5.656-3.203 4.721-2.184 8.131-5.666 11.828-9.262 2.305-1.932 3.471-2.28 6.297-2.926l2-3c2-3 2-3 4.25-3.875L420 591v-2h7v2h2l-1-3 2-1Z"
    />
    <path
      fill="#13294D"
      d="M150 511h2a276.623 276.623 0 0 1 3.488 5.074c1.613 2.055 3.28 3.336 5.387 4.864 1.785 1.48 1.785 1.48 3.125 3.062.584 7.008-2.926 12.457-7 18-3.214 1.607-6.514 1.467-10 1-2.938-1.563-2.938-1.563-5-4-1.937-6.681.24-11.288 2.875-17.375l1.145-2.77c2.777-6.652 2.777-6.652 3.98-7.855Z"
    />
    <path
      fill="#AEAEB7"
      d="M126 585h129l1 2-3 1 1.977-.105c5.509-.171 9.215.069 14.023 3.105v4l3 1h-4v-2h-4v-2h-2v-2h-16v-2H140v-2h-14v-1Z"
    />
    <path
      fill="#9FA0A9"
      d="M872 584v1l13 1v1h-25v3h-56l-1-5c23.008-.79 45.978-1.142 69-1Z"
    />
    <path
      fill="#CFD2DB"
      d="M915 414h1v6h2v26h2l-1 109c-2.746-2.746-2.274-4.326-2.319-8.173l-.06-3.959-.035-4.329-.059-4.475c-.052-3.99-.092-7.978-.128-11.967-.032-3.287-.07-6.574-.108-9.861-.11-9.419-.198-18.838-.275-28.257l-.045-5.434c-.154-18.54-.047-37.028 1.029-55.545h-2v-9Z"
    />
    <path
      fill="#1258C0"
      d="M365 387a77.495 77.495 0 0 1 4 3l-1 2c-6.625-.75-6.625-.75-10-3a530 530 0 0 0-5 1l-2-2c-3.415-.584-3.415-.584-7 0-2.289 2.361-2.289 2.361-4 5-3 1-3 1-5 1a141.135 141.135 0 0 0-5 5l-1.75 1.438c-3.146 3.932-2.358 10.162-2.313 14.937l.028 3.773L326 422l-3-1c-2.187-6.562-2.545-16.13.059-22.652 1.5-2.053 3.041-3.661 4.941-5.348l2.004-1.953c9.719-9.074 22.958-9.525 34.996-4.047Z"
    />
    <path
      fill="#84838E"
      d="M915 562h1v6h-2v4h-2v2h-2v2h-2v2h-2v2h-4v2h-4v2h-4v2h-8v2h-26v-1l7-1v-1l1.785-.228c2.719-.352 5.436-.718 8.153-1.085l2.806-.357c5.409-.74 10.356-1.84 15.48-3.733C897 579 897 579 899 579l1-3h3v-3c1.875-2.188 1.875-2.188 4-4h2l1-3 3-1 2-3Z"
    />
    <path
      fill="#D2D6DC"
      d="m709 581 2.625.563c3.525.456 5.882.02 9.375-.563 4.002-.14 8-.211 12 0l1 1c1.7.076 3.404.083 5.105.063l3.369-.026 3.713-.037c12.55-.07 25.08.147 37.625.5l2.6.073c4.862.137 9.725.28 14.588.427v1H646v-1c21.066-.789 41.937-1.19 63 0v-2Z"
    />
    <path
      fill="#0B70D6"
      d="m191.625 502.938 2.14.013c1.745.012 3.49.03 5.235.049a157.298 157.298 0 0 1 2.125 3.75l1.195 2.11c.68 2.14.68 2.14-.09 4.327-1.538 2.267-2.645 2.927-5.23 3.813-3.355.516-4.628.242-7.5-1.625-2.814-2.673-5.18-5.259-7.5-8.375v-3c3.065-1.533 6.268-1.103 9.625-1.063Z"
    />
    <path
      fill="#1770C6"
      d="M710.688 479.5 713 481v4a49.486 49.486 0 0 1-7.25-2.313c-4.412-.808-6.1-.206-9.883 1.965-2.959 2.136-4.808 4.324-6.867 7.348v3l-1 2c.318 1.999.318 1.999.938 4.125l.59 2.195L690 505c-1.875-.25-1.875-.25-4-1-2.596-3.726-2.645-7.684-2.586-12.102 1.056-5.224 4.583-8.574 8.586-11.898 5.585-3.55 12.783-2.902 18.688-.5Z"
    />
    <path
      fill="#28B0E7"
      d="M150.887 468.379c4.334 1.274 9.874 3.382 13.113 6.621-.176 2.69-.618 5.329-1 8-4.755-.576-7.97-2.55-12-5l-1 2c-1.46-2.647-2-3.894-2-7-3.497 1.284-3.497 1.284-7 3l-1 3-3 1c2.29-6.68 6.074-12.976 13.887-11.621Z"
    />
    <path
      fill="#CCCED2"
      d="M313 620v2h6v2h9v2h26c-2.691 2.691-4.204 2.32-7.969 2.45l-3.672.13-3.859.107-3.766.143c-7.004.225-13.786.121-20.734-.83v-2h-2v-2h-6v-2l-2-1c3.073-.91 5.801-1.089 9-1Z"
    />
    <path
      fill="#CACDD5"
      d="M900 577c-4.396 5.336-12.544 6.55-19.147 7.217-5.571.327-11.142.244-16.72.174-1.774-.008-3.547-.014-5.321-.018-4.62-.015-9.239-.054-13.858-.098-4.733-.042-9.467-.06-14.2-.08-9.252-.042-18.503-.11-27.754-.195l1-2c2.063-.625 2.063-.625 4-1v2l5.894-.305c1.709-.09 3.417-.177 5.126-.265a794.76 794.76 0 0 0 12.851-.754l2.301-.153c1.436-.096 2.871-.198 4.306-.306 2.702-.179 5.158-.294 7.818.27 3.216.61 6.235.643 9.509.646l3.957.004 2.048-.007c2.052-.005 4.103 0 6.155.007l3.965-.004 3.6-.004c5.912-.22 9.777-.574 14.47-4.129 7.086-2.457 7.086-2.457 10-1Z"
    />
    <path
      fill="#D3D5D9"
      d="M144 584c14.612-.047 29.225-.082 43.837-.104 6.786-.01 13.57-.024 20.356-.047 6.549-.022 13.098-.034 19.646-.039 2.498-.003 4.996-.01 7.494-.021 3.5-.015 7-.017 10.5-.016l3.125-.022c5.367.016 10.04.2 15.042 2.249l1 3-2 2v-3l-1.61.496c-2.929.618-5.648.599-8.64.567l-3.266-.028L247 589v-1l8-2-111-1v-1Z"
    />
    <path
      fill="#152139"
      d="M721 448c3.125 1.688 3.125 1.688 5 3l-1 4-8-2v-2l-1.813-.438c-1.749-.45-3.474-.99-5.187-1.562a82.942 82.942 0 0 0-4.563 0c-5.203.061-10.274-.385-15.437-1 8.574-5.716 21.887-3.89 31 0Z"
    />
    <path
      fill="#9DA0A8"
      d="m430 587 1 2h11v1h-12v2h-4v2h-4v2h-2v2h-2v2h-4v2h-2v2h-2c-.368-4.535-.368-4.535 1.188-6.5L413 596l2.563-2.688C418 591 418 591 420 591v-2h7v2h2l-1-3 2-1Z"
    />
    <path
      fill="#0B1A36"
      d="M434 482h44l-1 3c-5.48.074-10.962.129-16.443.165-1.864.015-3.728.035-5.593.061-2.68.037-5.361.054-8.042.067-.833.015-1.665.03-2.523.047h-2.365l-2.072.02C438 485 438 485 434 482Z"
    />
    <path
      fill="#0F4DAB"
      d="M169 502c12.166 8.513 12.166 8.513 13.688 14.875-1.02 4.633-3.062 8.035-6.688 11.125-3.667 1.04-6.839.387-10.438-.813C164 526 164 526 163 523l3-1 1.188 1.563c1.755 1.725 1.755 1.725 4.312 1.25 2.707-.756 2.707-.756 5.5-2.813.58-2.195.58-2.195.688-4.625l.199-2.477L178 513l-2.938-1.813C172 509 172 509 171 506l-3-2 1-2Z"
    />
    <path
      fill="#E2EEF6"
      d="M181 504c3.797 4.557 3.797 4.557 5 7.188 1.272 2.305 2.6 2.852 5 3.812a304.897 304.897 0 0 1-9 7l-.297-2.012c-.908-5.36-1.723-9.008-5.703-12.988h2l1-2 2-1Z"
    />
    <path
      fill="#1B273D"
      d="M882 443c2.938 2 2.938 2 5 4l-1 3h-2l-2 1-3-4c-3.088.647-3.088.647-4 2.875L874 452c-1.625 1.75-1.625 1.75-3 3l-1-1c.212-3.737.53-6.296 2.625-9.438 3.351-2.204 5.437-2.115 9.375-1.562Z"
    />
    <path
      fill="#E7F7F5"
      d="M151 478c3.483.645 6.094 1.982 9 4v2h3l1 11c-4.186-2.093-6.084-4.286-8.75-7.938l-1.246-1.63C151 481.385 151 481.385 151 478Z"
    />
    <path
      fill="#116CC9"
      d="M341 384c10.188-.396 19.745-.668 28 6l-1 2c-6.625-.75-6.625-.75-10-3a530 530 0 0 0-5 1l-2-2c-2.427-.68-2.427-.68-5.125-1.125l-2.758-.508L341 386v-2Z"
    />
    <path
      fill="#A0A4B0"
      d="M915 562h1v6h-2v4h-2v2h-2v2h-6l1 3h-6l1-3h3v-3c1.875-2.188 1.875-2.188 4-4h2l1-3 3-1 2-3Z"
    />
    <path
      fill="#0E1D33"
      d="M827 444c2.496 2.255 2.959 3.393 3.188 6.75L830 453h-5l2-4c-3.541-.08-6.594.027-10 1h-2c.357-2.59.862-3.846 2.625-5.813 3.48-1.74 5.682-1.194 9.375-.187Z"
    />
    <path fill="#BAB8DC" d="M804 587h33l1 2-34 1v-3Z" />
    <path
      fill="#1AB4F4"
      d="M147 469.5c2.668.18 4.065.532 6.5 1.75C155 473 155 473 155 477l-7-1v-3c-3.497 1.284-3.497 1.284-7 3l-1 3-3 1c1.858-5.419 3.725-10.255 10-10.5Z"
    />
    <path
      fill="#14203B"
      d="m297 522-1 5-12 2v-2h-11v-2l3.324-.148 4.363-.227 2.186-.094C287.834 524.26 292.212 522 297 522Z"
    />
    <path
      fill="#162040"
      d="m479 447 4 2-2 2c-2.114 5.595-2.377 11.064-2.656 17.012-.332 2.888-.989 4.477-2.344 6.988-.087-4.104-.14-8.208-.188-12.313l-.076-3.537-.029-3.388-.048-3.127C476 450 476 450 477.52 448.14L479 447Z"
    />
    <path fill="#F0F0FA" d="M536 500h34v1l-32 2-1 3h-1v-6Z" />
    <path
      fill="#101C34"
      d="m342.875 443.813 2.512-.038 2.418-.005 2.218-.013C352 444 352 444 355 446c-1.996 1.996-5.878 1.368-8.625 1.5-5.185.258-10.244.692-15.375 1.5 2.901-5.996 5.484-5.183 11.875-5.188Z"
    />
    <path
      fill="#C1C6D0"
      d="M916 553h1v11l-2-1-2 3-3 1-1 2h-2l-2 4h-2v3h-3v-2h2v-2c1.875-2.125 1.875-2.125 4-4h2c1.091-2.178 2.177-4.358 3.254-6.543l1.308-2.644 1.317-2.668C915 554 915 554 916 553Z"
    />
    <path
      fill="#1A243D"
      d="m427 444 2 4c-4.386.702-8.558 1.108-13 1v5l-2 1c-.476-6.192-.476-6.192 1.438-9.438 3.772-2.3 7.253-1.893 11.562-1.562Z"
    />
    <path
      fill="#17253E"
      d="m726 515 2 1c-1.403 3.334-2.97 5.055-5.875 7.188l-2.055 1.542c-2.054 1.26-3.716 1.832-6.07 2.27 0-4 0-4 1.863-5.887l2.45-1.8 2.425-1.825C723 516 723 516 726 515Z"
    />
    <path
      fill="#0B1A34"
      d="M537 481h34v2l-3.813-.125c-5.536-.018-10.784.994-16.187 2.125l-1-2-3.688.063c-3.232.005-6.161-.275-9.312-1.063v-1Z"
    />
    <path
      fill="#0C58CE"
      d="M340 391v2c-3 1-3 1-5 1a141.135 141.135 0 0 0-5 5l-1.688 1.625c-1.551 1.546-1.551 1.546-3.312 4.375v-6h2v-2h2l.375-1.875C330 393 330 393 332 391c3.016-1.106 4.96-.977 8 0Z"
    />
    <path
      fill="#18213C"
      d="M189.09 443.867C191 444 191 444 193 445v3l-9 2v-2l-4 1c2.475-5.115 3.213-5.111 9.09-5.133Z"
    />
    <path
      fill="#93C1E3"
      d="m374 429 2 1v2h2v-2l3-1v2h-2v2c-4.997 1.627-9.155 2.24-14.465 2.195l-2.055-.008c-2.14-.011-4.278-.036-6.418-.062-1.461-.01-2.923-.02-4.384-.027-3.56-.022-7.119-.057-10.678-.098v-1l2.706-.028c3.316-.044 6.631-.106 9.947-.18 1.434-.028 2.869-.049 4.303-.063a423.72 423.72 0 0 0 6.189-.12l3.76-.063c3.196-.247 3.196-.247 5.023-2.584L374 429Z"
    />
    <path
      fill="#2C75C0"
      d="m191.625 502.938 2.14.013c1.745.012 3.49.03 5.235.049l2 5-2 1v-2c-2.995-.872-5.636-1.108-8.75-1.063l-2.422.028L186 506v4c-2-1.313-2-1.313-4-3v-3c3.065-1.533 6.268-1.103 9.625-1.063Z"
    />
    <path
      fill="#D3DBE8"
      d="M791 493h2l1 4h2l-2 10h-2a277.676 277.676 0 0 1-1.563-4.25l-.878-2.39c-.609-2.571-.466-3.906.441-6.36l1-1Z"
    />
    <path
      fill="#3993CD"
      d="M367 431c2.34.287 4.674.62 7 1-3.74 2.493-6.626 2.255-10.95 2.195l-2.34-.008c-2.466-.011-4.932-.037-7.397-.062-1.673-.01-3.346-.02-5.018-.027-4.099-.022-8.197-.057-12.295-.098v-1c9.314-.58 18.572-1.142 27.91-.938 2.08.177 2.08.177 3.09-1.062Z"
    />
    <path
      fill="#147BDD"
      d="M156 489c1.938.625 1.938.625 4 2 .75 3.125.75 3.125 1 6h2c-1.117 3.35-1.747 3.793-4.563 5.688l-1.94 1.324L155 505l.46-1.82c1.257-5.078 1.646-9.019.54-14.18Z"
    />
    <path
      fill="#0D1F3D"
      d="m331 458 3.184.438c7.318.977 14.415 1.826 21.816 1.562v2h-23l-2-4Z"
    />
    <path
      fill="#B9BDC4"
      d="m397 609 1 2h-2l1 4h-2v-2l-3 2v4h-3v-2l-2 2v2h-2v-3l-2-1c4.48-3.136 9.066-5.646 14-8Z"
    />
    <path
      fill="#999DA5"
      d="M387 617h2v2l3 1h-4v2h-4v2h-4v2l-4-1h3v-2l-2-1c4.625-4 4.625-4 8-4v3h2l-1-3 1-1Z"
    />
    <path
      fill="#2B6EB4"
      d="M701.25 477.688c4.63.066 7.79.744 11.75 3.312v4c-3.698-.638-3.698-.638-5.25-2.5-2.528-2.167-4.658-2.011-7.938-2.188l-3.292-.199L694 480c2.572-2.572 3.679-2.298 7.25-2.313Z"
    />
    <path
      fill="#1E293D"
      d="m696 446-3 1 6 1v1c-5.784 2.012-10.902 2.22-17 2l-1-2c1.745-.7 3.496-1.385 5.25-2.063l2.953-1.16c2.837-.788 4.091-.801 6.797.223Z"
    />
    <path
      fill="#9B9CA1"
      d="M269 591v4l3 1h-4v-2h-4v-2h-2v-2h-16v-1c2.04-.197 4.083-.382 6.125-.563l3.445-.316c4.975-.176 9.094.378 13.43 2.879Z"
    />
    <path
      fill="#121E37"
      d="M309 444c1.458-.054 2.916-.093 4.375-.125l2.46-.07C318 444 318 444 320 446l-1 3h-6v-2l-5 2 1-5Z"
    />
    <path
      fill="#2353AB"
      d="M169 502c5.072 3.549 9.344 6.973 13 12v2h-3l-.688-1.813c-1.649-2.748-3.586-3.58-6.312-5.187l-1-3-3-2 1-2Z"
    />
    <path
      fill="#142036"
      d="m523.941 444.902 3.621.036 3.63.027L534 445c-2.496 2.496-4.65 2.949-8 4l-2.75 1.188L521 451l-2-1c1.122-4.97 1.122-4.97 4.941-5.098Z"
    />
    <path
      fill="#D5EAF3"
      d="M181 504c2.12 2.615 4.13 5.196 6 8l-1.875.438c-2.158.494-2.158.494-4.125 1.562l-5-7h2l1-2 2-1Z"
    />
    <path
      fill="#232C43"
      d="m490 444-1 3-3.688.375c-3.377.414-6.21 1.17-9.312 2.625 1.053-3.053 2.004-4.002 4.75-5.813 3.636-1.328 5.553-1.155 9.25-.187Z"
    />
    <path
      fill="#6FB4D2"
      d="M383 405c2.617 3.925 3.148 6.898 3.188 11.563l.042 2.316C386 421 386 421 384 424c-1.986-5.71-2.475-10.96-2-17l1-2Z"
    />
    <path
      fill="#253450"
      d="M233 531c-.875 6.75-.875 6.75-2 9l-4-1c-.688-1.75-.688-1.75-1-4 2.033-3.851 2.435-4 7-4Z"
    />
    <path
      fill="#195EAF"
      d="m695.438 479.5 2.562.5c-1.404 2.807-3.108 2.967-6 4l-3 1-2 10h-2c-.555-3.809-.66-5.899 1.348-9.246 4.535-5.591 4.535-5.591 9.09-6.254Z"
    />
    <path
      fill="#151D37"
      d="m248.066 443.902 2.496.036 2.504.027L255 444v3l-3.375.938c-3.42.885-3.42.885-5.625 2.062l-2-1c1.12-4.958 1.12-4.958 4.066-5.098Z"
    />
    <path
      fill="#1599E1"
      d="M141 498h2v2l4 2v2h2a158.814 158.814 0 0 1 5 6l-2 2c-3.882-3.768-7.795-7.628-11-12v-2Z"
    />
    <path
      fill="#BDBFC4"
      d="m245.04 584.805 3.585.07 3.602.055L255 585l1 2c-10.374 2.665-10.374 2.665-16 0 2-2 2-2 5.04-2.195Z"
    />
    <path
      fill="#327BC2"
      d="M684 489h1v6h2c1.129 3.311 2.213 6.59 3 10-1.875-.25-1.875-.25-4-1-2.158-3.237-2.216-5.925-2.125-9.75l.055-2.984L684 489Z"
    />
    <path
      fill="#0E1A39"
      d="m688 523 2.16.402c5.27.972 10.528 1.89 15.84 2.598v1c-1.894.224-3.79.428-5.688.625l-3.199.352c-3.3.024-5.24-.373-8.113-1.977l-1-3Z"
    />
    <path
      fill="#2974CA"
      d="M323 421c4.44 1.395 6.98 3.477 10 7 .813 2.313.813 2.313 1 4-5.573-1.311-8.067-5.414-11-10v-1Z"
    />
    <path
      fill="#CBD6E0"
      d="M752 486h1c.027 2.854.047 5.708.063 8.563l.025 2.423c.05 12.307.05 12.307-3.088 17.014h-2l.621-1.809c2.695-8.679 3.073-17.177 3.379-26.191Z"
    />
    <path
      fill="#E6F2F9"
      d="M193 495c2 3 2 3 2 5h-2v2l-8 1c.125-1.813.125-1.813 1-4 3-1.688 3-1.688 6-3l1-1Z"
    />
    <path
      fill="#BDD6F1"
      d="m688 480 4 1-1.496 1.398c-4.663 4.748-6.3 8.026-6.531 14.696L684 499h-1v-14l4-1 1-4Z"
    />
    <path
      fill="#43ADD9"
      d="m159 472 5 3-1 8c-2.438-.375-2.438-.375-5-1l-1-2 3-2-1-6Z"
    />
    <path
      fill="#0F1E34"
      d="M878 444c5.538-.37 5.538-.37 7.875 1.5L887 447l-1 3h-2l-2 1c-2-1.813-2-1.813-4-4v-3Zm-2 3 2 1Z"
    />
    <path fill="#AFB3BB" d="M915 414h1v6h2v26h-1v-23h-2v-9Z" />
    <path
      fill="#0B1729"
      d="m700.688 444.938 2.449.027L705 445l-2 4-13-1c3.769-2.512 6.262-3.127 10.688-3.063Z"
    />
    <path
      fill="#D0DCEA"
      d="M852 495h2a251911620.716 251911620.716 0 0 0-1.465 6.836C852 504 852 504 851 506h-2l-1-7h2v-2h2v-2Z"
    />
    <path
      fill="#BFC4D0"
      d="m701.813 463.875 3.519.055L708 464v1h-6v2c-8.571 1.429-8.571 1.429-12-1 4.077-1.95 7.317-2.216 11.813-2.125Z"
    />
    <path
      fill="#B8BBC5"
      d="m379 619 2 1-3 2 1 3h-3v2h-7l1.938-.875c2.214-.953 2.214-.953 3.062-3.125l-2-1a135.916 135.916 0 0 1 7-3Z"
    />
    <path
      fill="#1869C4"
      d="m201 509 2 4c-3.797 2.826-6.186 4.566-11 4v-2l6-1 .375-1.938L199 510l2-1Z"
    />
    <path
      fill="#A7A6AE"
      d="M306 623c1.437-.054 2.875-.093 4.313-.125l2.425-.07C315 623 315 623 318 625l-1 2h7v1h-10v-2h-2v-2h-6v-1Z"
    />
    <path
      fill="#1355A4"
      d="M164 522h2l1.188 1.5c2.772 2.295 5.344 1.696 8.812 1.5v3c-8.975.3-8.975.3-12-2l-1-3 1-1Z"
    />
    <path
      fill="#6AAAC9"
      d="M716 485c3.213 3.113 4.304 5.297 4.375 9.688-.067 4.004-.067 4.004-2.375 6.312v-7l-2-1v-8Z"
    />
    <path
      fill="#C7CEDC"
      d="m886 443 3 2v2h2c.293 6.055.293 6.055 0 8l-3 2 .25-3.125c-.288-4.465-1.536-6.398-4.25-9.875l2-1Z"
    />
    <path
      fill="#D8D9DE"
      d="M313 620v2h6v2c-2.126-.114-4.25-.241-6.375-.375-1.183-.07-2.367-.14-3.586-.21C306 623 306 623 304 621c3.073-.91 5.801-1.089 9-1Z"
    />
    <path
      fill="#1E2C46"
      d="M742 467h2a594.74 594.74 0 0 1 3.063 5.813l1.722 3.269C750 479 750 479 749 482c-1.762-2.643-3.199-5.23-4.625-8.063l-1.352-2.66C742 469 742 469 742 467Z"
    />
    <path
      fill="#8E8C98"
      d="m415 596 2 1 1 3h-4v2h-2v2h-2c-.313-2.313-.313-2.313 0-5 2.375-1.875 2.375-1.875 5-3Z"
    />
    <path
      fill="#CCF6F0"
      d="M151 478c3.27.564 4.826 1.5 7 4l-2 4c-2.5-2.313-2.5-2.313-5-5v-3Z"
    />
    <path
      fill="#296DC8"
      d="M341 384h14c-5 4-5 4-7.457 3.953l-2.356-.703-2.394-.672L341 386v-2Z"
    />
    <path
      fill="#44B6E7"
      d="M136 480h1c.222 1.623.427 3.249.625 4.875l.352 2.742L138 490l-2 2c-1.951-2.87-1.99-4.126-1.688-7.688C135 481 135 481 136 480Z"
    />
    <path
      fill="#C2EBF4"
      d="m160 472 5 2v3h2c-1.75 5.75-1.75 5.75-4 8l-3-2h3c.537-5.36.537-5.36-1.5-10l-1.5-1Z"
    />
    <path
      fill="#0E1832"
      d="m422 445-2 4h-4v5l-2 1c-.363-6.408-.363-6.408 1.188-8.938 2.372-1.39 4.109-1.281 6.812-1.062Z"
    />
    <path fill="#737786" d="M904 576h4v2h-2v2h-4v2h-4l-1-3 7-1v-2Z" />
    <path
      fill="#202D4A"
      d="m261 511 2 3c.87 1.232 1.746 2.461 2.625 3.688l1.352 1.886L268 521l-4 1c-3-6.5-3-6.5-3-11Z"
    />
    <path
      fill="#34B3E7"
      d="m143 470 4 2-2.938 1.813C140.77 475.71 140.77 475.71 140 479l-3 1c1.37-3.995 3.257-6.8 6-10Z"
    />
    <path
      fill="#368AD4"
      d="M369 390c4.86 2.503 8.279 6.086 12 10-3.592 0-4.024-.632-6.563-3-2.336-2.425-2.336-2.425-5.437-3v-4Z"
    />
    <path
      fill="#25344B"
      d="m214 536 6 1v3l2 1-1 2c-2.375-.688-2.375-.688-5-2-1.313-2.625-1.313-2.625-2-5Z"
    />
    <path
      fill="#20314A"
      d="m251 528 3 1v3h3l1 5c-5.785-3.323-5.785-3.323-6.875-6.75L251 528Z"
    />
    <path fill="#EEF5FB" d="m180 500 1 2h3v2c-5.625 3-5.625 3-9 3l2-4h2l1-3Z" />
    <path fill="#9797A1" d="M368 623h6l-1 3 3 2h-8v-5Z" />
    <path
      fill="#D1D4DA"
      d="m412 595 2 1c-2.28 3.42-3.326 3.566-7 5a100.753 100.753 0 0 0-3 3h-2v-2h2v-2c1.68-1.324 1.68-1.324 3.875-2.688l2.18-1.386L412 595Z"
    />
    <path
      fill="#182040"
      d="M147 521h2c-.875 5.75-.875 5.75-2 8h-3c.75-5.75.75-5.75 3-8Z"
    />
    <path
      fill="#C2D8EA"
      d="m718 501 1 2c-1.339 3.496-2.49 5.594-5.438 7.938-2.788 1.156-3.814 1.181-6.562.062l3.25-1.625c3.876-2.186 5.571-4.54 7.75-8.375Z"
    />
    <path
      fill="#14223A"
      d="M804 475h3l-.875 2.125c-1.146 2.93-2.151 5.884-3.125 8.875h-2c.468-4.056.88-7.466 3-11Z"
    />
    <path
      fill="#10223F"
      d="m259 509 2 1c.414 2.285.414 2.285.625 5.063l.227 2.785L262 520c-3-2-3-2-3.75-5.5-.25-3.5-.25-3.5.75-5.5Z"
    />
    <path
      fill="#09316B"
      d="M201 503c2 1 2 1 3.25 3.875L205 510l-2 3c-4-6.75-4-6.75-4-9l2-1Z"
    />
    <path fill="#BDDCF2" d="m197 499 1 5-12-1v-1h7v-2c2-1 2-1 4-1Z" />
    <path
      fill="#2E3A54"
      d="m653 528 2 1c.195 6.055.195 6.055 0 8l-2 2-2-2c.242-2.164.242-2.164.875-4.625l.617-2.477L653 528Z"
    />
    <path
      fill="#1F2841"
      d="m714 524-1 2c-4.935 1.086-9.051.909-14 0v-1c2.124-.362 4.249-.714 6.375-1.063l3.586-.597C712 523 712 523 714 524Z"
    />
    <path fill="#D4DEEA" d="m204 513 2 6-6-1-1-3c3-2 3-2 5-2Z" />
    <path
      fill="#212A43"
      d="m304 511 2 1-2 2-.938 2.5C302 519 302 519 299 521c0-3.731 1.18-5.78 3-9l2-1Z"
    />
    <path fill="#2B83C4" d="m708 479 5 2v4c-3.27-.564-4.826-1.5-7-4h2v-2Z" />
    <path
      fill="#162040"
      d="M731 459c2.75-.25 2.75-.25 6 0 2.375 2 2.375 2 4 4l-1 3-2.25-2.5c-2.624-2.948-2.624-2.948-6.75-2.5v-2Z"
    />
    <path fill="#131D31" d="M600 444h7v2a100.644 100.644 0 0 1-6 3l-2-1 1-4Z" />
    <path
      fill="#C8CAD1"
      d="m397 609 1 2h-2l1 4h-2v-2l-2.313 1C390 615 390 615 387 615c2.725-3.366 6.069-4.442 10-6Z"
    />
    <path fill="#7E8188" d="M914 568v4h-2v2h-2l-1 2-1-5c3.75-3 3.75-3 6-3Z" />
    <path
      fill="#25314B"
      d="M534 527h1c.054 1.791.093 3.583.125 5.375l.07 3.023C535 538 535 538 533 540l-1-5h2v-4h-2l2-4Z"
    />
    <path
      fill="#0B1329"
      d="M523 445h11c-2.495 2.495-3.673 2.36-7.125 2.625l-2.758.227L522 448l1-3Z"
    />
    <path
      fill="#222B3E"
      d="m762.066 442.902 2.496.036 2.504.027L769 443l1 2h-3l1 2c-3.344-.557-6.033-1.352-9-3 1-1 1-1 3.066-1.098Z"
    />
    <path fill="#74B0CE" d="m374 429 2 1v2h2v-2l3-1v2h-2v2l-8 1 3-5Z" />
    <path
      fill="#1147BB"
      d="M334.313 389.188 336 390l-1.813.688c-2.748 1.649-3.58 3.586-5.187 6.312l-3 1c.49-4.414 3.52-9.201 8.313-8.813Z"
    />
    <path
      fill="#898C94"
      d="M393 613h2l1 1c2.054-.41 2.054-.41 4-1l-2 1v2h-4v2l-3-1 2-4Z"
    />
    <path
      fill="#122238"
      d="m356 532 1.375 1.938c1.464 2.159 1.464 2.159 3.625 3.062v4c-3.875-.875-3.875-.875-5-2-.04-2.333-.042-4.667 0-7Z"
    />
    <path
      fill="#21304C"
      d="m302 536 4 2c-1.29.672-2.581 1.337-3.875 2l-2.18 1.125C298 542 298 542 296 542c1-3 1-3 3-4.125l2-.875 1-1Z"
    />
    <path
      fill="#DEEAEA"
      d="m173 500 6 1v2c-2.375 1.688-2.375 1.688-5 3l-2-1 1-5Z"
    />
    <path
      fill="#1EB8F4"
      d="m141 475 2 1-5 10h-1v-6l3-1c.733-2.015.733-2.015 1-4Z"
    />
    <path
      fill="#0D1E39"
      d="m543.625 459.938 2.477.59L548 461v1h-11v-2c2.633-1.316 3.802-.748 6.625-.063Z"
    />
    <path
      fill="#1A263F"
      d="m678 454-9 6c1-4 1-4 2.813-5.813C674 453 674 453 678 454Z"
    />
    <path
      fill="#EDEFF6"
      d="M613 446h3c.054 1.625.093 3.25.125 4.875l.07 2.742C616 456 616 456 614 458l-1-12Z"
    />
    <path
      fill="#2B384C"
      d="M400 446c1.708 1.634 2.935 2.87 4 5 .04 2 .043 4 0 6-3.15-3.423-3.562-6.443-4-11Z"
    />
    <path
      fill="#081E44"
      d="m693 540 2 1c2.371.23 4.747.411 7.125.563l3.883.253L709 542v1h-17l1-3Z"
    />
    <path
      fill="#1E2F49"
      d="M209 524h2l2 5h2v2l-4 1c-1.257-2.906-2-4.796-2-8Z"
    />
    <path
      fill="#012F67"
      d="M156 518c3.536 1.911 5.79 3.626 8 7-3.34-.596-5.505-1.683-8-4v-3Z"
    />
    <path
      fill="#23314C"
      d="m853 500 2 1c-.56 3.243-1.413 4.93-4 7h-2v-2h2l2-6Z"
    />
    <path
      fill="#1768BE"
      d="M200.063 504.938 201 507l-2 2v-2l-10-2v-1c8.35-1.61 8.35-1.61 11.063.938Z"
    />
    <path fill="#34A2ED" d="m152 482 5 5-1 3h-4v-8Z" />
    <path
      fill="#1C253F"
      d="M329 450h2l.438 2.313c.525 2.769.525 2.769 1.562 5.687l-3 1c-1-1-1-1-1.098-2.848L329 450Z"
    />
    <path
      fill="#0B1C38"
      d="M876 448c-1.293 2.884-2.66 4.872-5 7l-1-4c3.75-3 3.75-3 6-3Z"
    />
    <path
      fill="#55A2C9"
      d="M374 432c-3.314 2.21-4.345 2.225-8.188 2.125l-2.73-.055L361 434v-1c4.76-1.974 7.965-2.007 13-1Z"
    />
    <path fill="#8C8F9B" d="m406 603 4 1v2h-2v2l-5-1v-2h3v-2Z" />
    <path fill="#0F1F42" d="M150 538h4v4h-7c1.25-2 1.25-2 3-4Z" />
    <path fill="#1382D6" d="m148 504 6 5-2 3-5-5 1-3Z" />
    <path
      fill="#2B65BF"
      d="M159 492c1.15.954 2.294 1.914 3.438 2.875l1.933 1.617C166 498 166 498 167 500l-3 1-1-4h-2l-2-5Z"
    />
    <path
      fill="#D9D9E4"
      d="m676 478 2 1c-1.313 3.438-1.313 3.438-3 7l-3 1c1.059-3.403 2.009-6.014 4-9Z"
    />
    <path fill="#0E1C37" d="m479 447 4 2-5 4c-.625-1.875-.625-1.875-1-4l2-2Z" />
    <path fill="#0E1D37" d="M715 522h3l1 3-5 2c0-4 0-4 1-5Z" />
    <path fill="#143B62" d="M150 511h2l2 4h-2l-1 2h-3l2-6Z" />
    <path
      fill="#0E1D36"
      d="M681 450c2.007.287 4.009.619 6 1-1.305 2.61-2.358 2.68-5.063 3.625-.733.26-1.466.52-2.222.79-.566.192-1.132.386-1.715.585 1.875-4.875 1.875-4.875 3-6Z"
    />
    <path
      fill="#282E41"
      d="m598 445 2 1c-.813 2.438-.813 2.438-2 5l-3 1c.75-4.75.75-4.75 3-7Z"
    />
    <path
      fill="#32394B"
      d="M823.688 443.313 827 444c-3.402 2.094-6.053 2.18-10 2 2.107-3.099 2.82-3.015 6.688-2.688Z"
    />
    <path
      fill="#959BA8"
      d="M916 562v6h-5c0-2 0-2 1.938-4.125C915 562 915 562 916 562Z"
    />
    <path
      fill="#212D4A"
      d="M370 534h3c-.75 4.75-.75 4.75-3 7-.934-3.01-1.044-3.867 0-7Z"
    />
    <path fill="#10203C" d="m142 530 4 1-2 5h-2v-6Z" />
    <path
      fill="#203047"
      d="M319 515c1.125 1.688 1.125 1.688 2 4-.875 2.75-.875 2.75-2 5l-2-3c.875-3.188.875-3.188 2-6Z"
    />
    <path fill="#C6CCDB" d="M873 498c1 4 1 4 1 8l-3 1 2-9Z" />
    <path fill="#101B36" d="M861 476h2l1 4-4 2a99.984 99.984 0 0 1 0-5l1-1Z" />
    <path fill="#283554" d="M205 472c3.087 3.087 3.449 3.92 4 8l-2 1-2-9Z" />
    <path
      fill="#DDE2EB"
      d="m834 452 2 1c.125 2.875.125 2.875 0 6l-2 2c-1.125-5.625-1.125-5.625 0-9Z"
    />
    <path
      fill="#C3C6D0"
      d="m768 440 4 1v2c-2.995.998-4.173 1.007-7.188.563L761 443v-1l7-1v-1Z"
    />
    <path
      fill="#1663C3"
      d="m338 385 7 1a105.022 105.022 0 0 1-4 5h-2v-2h2l-3-4Z"
    />
    <path fill="#85858E" d="M378 621h3v2l3 1h-4v2l-4-1h3v-2l-2-1 1-1Z" />
    <path fill="#DADCE1" d="m399 604 3 1-5 5-2-1c1-3 1-3 4-5Z" />
    <path fill="#AEB5C0" d="m910 566 2 3-5 4-2-1 2-3h2l1-3Z" />
    <path fill="#111E38" d="m414 533 1 2h2l1 5-4-1v-6Z" />
    <path
      fill="#263145"
      d="m887 448 2 2c-.033 2.729-.564 5.297-1 8-2.567-3.85-1.833-5.586-1-10Z"
    />
    <path fill="#101730" d="M423 445h5l1 3-5 1-1-4Z" />
  </svg>
);
export default AuthFlowSvg;
