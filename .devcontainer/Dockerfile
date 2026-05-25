FROM quay.io/fedora/fedora:44

RUN dnf install -y \
    rpm-build \
    gcc-c++ \
    make \
    python3 \
    git

RUN sudo dnf install -y \
    nss atk at-spi2-atk cups-libs libdrm libxkbcommon libXcomposite libXdamage libXfixes libXrandr mesa-libgbm pango cairo alsa-lib nspr gtk3 libxcrypt-compat

RUN dnf5 -y install git

RUN dnf5 -y install chezmoi
