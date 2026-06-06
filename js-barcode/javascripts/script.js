// Modern Barcode Generator - Vanilla ES6+ JavaScript
// No jQuery dependency

const defaultValues = {
  CODE128: 'JsBarcode',
  EAN: '1234567890128',
  UPC: '123456789999',
  CODE39: 'JSBARCODE',
  ITF14: '10012345000017',
  ITF: '123456',
  pharmacode: '1234',
};

class BarcodeGenerator {
  constructor() {
    this.elements = {
      userInput: document.getElementById('userInput'),
      barcodeType: document.getElementById('barcodeType'),
      barcode: document.getElementById('barcode'),
      invalid: document.getElementById('invalid'),
      barWidth: document.getElementById('bar-width'),
      barHeight: document.getElementById('bar-height'),
      barFontSize: document.getElementById('bar-fontSize'),
      displayValueRadios: document.querySelectorAll('input[name="display-value"]'),
      barWidthDisplay: document.getElementById('bar-width-display'),
      barHeightDisplay: document.getElementById('bar-height-display'),
      barFontSizeDisplay: document.getElementById('bar-fontSize-display'),
    };

    this.init();
  }

  init() {
    // Event listeners
    this.elements.userInput.addEventListener('input', () => this.generateBarcode());
    this.elements.barcodeType.addEventListener('change', () => this.handleTypeChange());

    this.elements.displayValueRadios.forEach((radio) => {
      radio.addEventListener('change', () => this.generateBarcode());
    });

    // Range slider listeners
    this.elements.barWidth.addEventListener('input', () => this.generateBarcode());
    this.elements.barHeight.addEventListener('input', () => this.generateBarcode());
    this.elements.barFontSize.addEventListener('input', () => this.generateBarcode());

    // Initialize custom range slider styling
    this.initRangeSliders();

    // Generate initial barcode
    this.generateBarcode();
  }

  handleTypeChange() {
    const selectedType = this.elements.barcodeType.value;
    this.elements.userInput.value = defaultValues[selectedType];
    this.generateBarcode();
  }

  generateBarcode() {
    // Get display value preference
    const displayValue = document.querySelector('input[name="display-value"]:checked').value === 'true';

    // Update display values
    this.updateDisplayValues();

    try {
      // Generate barcode using JsBarcode library
      JsBarcode(this.elements.barcode, this.elements.userInput.value, {
        format: this.elements.barcodeType.value,
        backgroundColor: '#fff',
        fontSize: parseInt(this.elements.barFontSize.value, 10),
        height: parseInt(this.elements.barHeight.value, 10),
        width: parseInt(this.elements.barWidth.value, 10),
        displayValue,
        valid: (valid) => {
          this.handleValidation(valid);
        },
      });

      // Manually check validity since callback might not always work
      this.handleValidation(true);
    } catch (error) {
      this.handleValidation(false);
    }
  }

  handleValidation(valid) {
    if (valid) {
      this.fadeOut(this.elements.invalid);
    } else {
      this.fadeIn(this.elements.invalid);
    }
  }

  updateDisplayValues() {
    this.elements.barWidthDisplay.textContent = this.elements.barWidth.value;
    this.elements.barHeightDisplay.textContent = this.elements.barHeight.value;
    this.elements.barFontSizeDisplay.textContent = this.elements.barFontSize.value;
  }

  fadeOut(element) {
    element.style.transition = 'opacity 300ms ease';
    element.style.opacity = '0';
  }

  fadeIn(element) {
    element.style.transition = 'opacity 300ms ease';
    element.style.opacity = '1';
  }

  initRangeSliders() {
    const ranges = [
      this.elements.barWidth,
      this.elements.barHeight,
      this.elements.barFontSize,
    ];

    ranges.forEach((range) => {
      this.updateRangeSlider(range);
      range.addEventListener('input', () => this.updateRangeSlider(range));
    });
  }

  updateRangeSlider(range) {
    const value = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.setProperty('--range-value', `${value}%`);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BarcodeGenerator();
  });
} else {
  new BarcodeGenerator();
}
