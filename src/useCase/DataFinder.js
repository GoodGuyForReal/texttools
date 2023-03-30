export const extractData = (text) => {
    // eslint-disable-next-line no-useless-escape
    const priceRegex = /(\$|\€|\£|\₽|\zł|\Ft|\Kč|\kr|\Ls|\Lt|\MKD|\MT|\NOK|\lei|\zł|\złoty|\Ft|\koruna|\krone|\€uro|\ceni|\€cent|€ct|\¢|\€stotinki|\€centavos|\€cêntimo|\€centai|\€centesimi|\€centimes|\€centimos|\€feniks|\€öre|\€øre|\€fenigów|\€fils|\€groszy|\€haléř|\€kr|\€kuna|\€lats|\€lira|\€öre|\€penny|\€pence|\€pfennig|\€pfl|\€paisa|\€pf|\€qirsh|\€riyal|\€centiem|\€centimo|\€centi|\€sentimo|\€senti|\€santim|\€stotka|\€stotinki|\€stotinov|\€tolar|\€øre)[\d,]+(\.\d+)?/g;
    // eslint-disable-next-line no-useless-escape
    const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{2,4})|(\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{2,4})|((Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}[a-z]{0,2},?\s+\d{2,4})|(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/gi;
    const lengthRegex = /(\d+(\.\d+)?\s?(inches|in|cm|millimeters|mm))/gi;
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const timeRegex = /([01]?[0-9]|2[0-3]):[0-5][0-9](?::[0-5][0-9])?(?:\s*[ap]\.?m\.?)?/gi;

    const prices = text.match(priceRegex) || null;
    const lengths = text.match(lengthRegex) || null;
    const phones = text.match(phoneRegex) || null;
    const emails = text.match(emailRegex) || null;
    const date = text.match(dateRegex) || null;
    const time = text.match(timeRegex) || null;
    return { prices, lengths, phones, emails, date, time, text };
}