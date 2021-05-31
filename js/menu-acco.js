const mesureWidth = (item) => {
  let reqItemWidth = 0
  const screenWidth = $(window).width()
  const container = item.closest(".products-menu")
  const titleBlocks = container.find(".products-menu__title")
  const titleWidth = titleBlocks.width() * titleBlocks.length

  const textContainer = item.find(".products-menu__container")
  const paddingLeft = parseInt(textContainer.css("padding-left"))
  const paddingRight = parseInt(textContainer.css("padding-right"))

  const isMobile = window.matchMedia("(max-width: 768px)").matches

  if (isMobile) {
    reqItemWidth = screenWidth - titleWidth
  } else {
    reqItemWidth = 500
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight,
  }
}

const closeEveryItemInContainer = (container) => {
  const items = container.find(".products-menu__item")
  const contentMenu = container.find(".products-menu__content")

  items.removeClass("active")
  contentMenu.width(0)
}

const openItemBlock = (item) => {
  const hiddenContent = item.find(".products-menu__content")
  const reqWidth = mesureWidth(item)
  const textBlock = item.find(".products-menu__container")

  item.addClass("active")
  hiddenContent.width(reqWidth.container)
  textBlock.width(reqWidth.textContainer)
}

$(".products-menu__title").on("click", (e) => {
  e.preventDefault()

  const $this = $(e.currentTarget)
  const item = $this.closest(".products-menu__item")
  const itemOpened = item.hasClass("active")
  const container = $this.closest(".products-menu")

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItemBlock(item)
  }
})

$(".products-menu__close").on("click", (e) => {
  e.preventDefault()

  const $this = $(e.currentTarget)
  const item = $this.closest(".products-menu__item")
  const itemOpened = item.hasClass("active")
  const container = $this.closest(".products-menu")

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItemBlock(item)
  }
})
