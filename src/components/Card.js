export default class {
    constructor(data, cardTemplate, { handleCardClick, handleBasketClick, counterLikes }) {
        this._data = data;
        this._cardTemplate = cardTemplate;
        this._newCardSelector = '.photo-place';
        this._placeLikeSelector = 'photo-place__like';
        this._newCardElement = this._cardTemplate.querySelector(this._newCardSelector);
        this._handleCardClick = handleCardClick;
        this._handleBasketClick = handleBasketClick; // должен открыть попап с вопросом об удалении
        this._counterLikes = counterLikes;
        this._element = this._getTemplate();
        this._placeWithImage = this._element.querySelector('.photo-place__image');
        this._placeWithCaption = this._element.querySelector('.photo-place__caption');
        this._placeLikeSymbol = this._element.querySelector('.photo-place__like');
        this._counterLikeElement = this._element.querySelector('.photo-place__like-number');
        this._placeBasketSymbol = this._element.querySelector('.photo-place__basket'); 
    }

    _getTemplate() {
        if (this._data.owner._id !== "938e46438622e38390dc83dc") {
            const cardElement = this._newCardElement.cloneNode(true);
            cardElement.querySelector('.photo-place__basket').remove(); 
            // console.log(this._data)
            return cardElement;
        } else {
            const cardElement = this._newCardElement.cloneNode(true);

            return cardElement;
        }
    }

    generateCard() {
        this._setEventListeners();
        this._placeWithImage.src = this._data.link;
        this._placeWithCaption.textContent = this._data.name;
        this._counterLikeElement.textContent = this._data.likes.length
        this._placeWithImage.alt = 'добавленное пользователем изображение';
        this._data.likes.forEach(user => {
            if(user._id == "938e46438622e38390dc83dc") {
                this._placeLikeSymbol.classList.add(`${this._placeLikeSelector}_click`)
            }
        });
        return this._element;
    }

    _setEventListeners() {
        this._placeWithImage.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._placeLikeSymbol.addEventListener('click', () => {
            this._likeCard(this._placeLikeSymbol);
        });

        if(this._placeBasketSymbol) {
            this._placeBasketSymbol.addEventListener('click', (evt) => {
                this._handleBasketClick(evt);
            });
        }
    }

    // методы-обработчики
    _likeCard = (button) => {
        button.classList.toggle(`${this._placeLikeSelector}_click`);
        this._counterLikes();
    }

    deleteCard = (evt) => {
        evt.target.closest(this._newCardSelector).remove();
    }
}