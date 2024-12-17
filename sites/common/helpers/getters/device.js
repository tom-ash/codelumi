function getDevice(userAgent) {
  if (
    /Android|BlackBerry|IEMobile|Opera Mini|iPad|iPhone|iPod|webOS/i.test(
      userAgent,
    )
  ) {
    return 'largePhone';
  }

  return 'largePc';
}

export default getDevice;
