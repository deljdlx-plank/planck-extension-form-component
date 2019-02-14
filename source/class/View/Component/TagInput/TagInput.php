<?php

namespace Planck\Extension\FormComponent\View\Component;

use Phi\HTML\Element\Div;
use Phi\HTML\Element\Input;
use Planck\Extension\FrontVendor\Package\Tag;
use Planck\View\Component;

class TagInput extends Component
{

    /**
     * @var Div
     */
    protected $placeholder;

    /**
     * @var Div
     */
    protected $valuesPlaceholder;


    protected $sourceURL;


    protected $name = 'tags[]';


    public function __construct($tagName = 'div')
    {
        parent::__construct($tagName);

        $this->addFrontPackage(
           new Tag()
        );


        $this->placeholder = new Div();
        $this->placeholder->setAttribute('class', 'plk-tag-placeholder');


        $this->valuesPlaceholder = new Div();
        $this->valuesPlaceholder->setAttribute('class', 'plk-tag-values-placeholder');



        $this->dom->addChild($this->placeholder);
        $this->dom->addChild($this->valuesPlaceholder);


        $this->dom->setAttribute('class', 'plk-component plk-tag-input');
        $this->dom->setAttribute('data-name', 'plk-component plk-tag-input');

        $this->setName($this->name);


    }


    public function values(array $values)
    {
        foreach ($values as $value) {
            $this->addValue($value);
        }
        return $this;
    }


    public function addValue($value)
    {
        $input = new Input();
        $input->setAttribute('value', $value);
        $input->setAttribute('class', 'plk-tag-input-value form-data');
        $input->setAttribute('type', 'hidden');
        $this->valuesPlaceholder->append($input);
        return $this;
    }




    public function setName($name)
    {
        $this->name = $name;
        $this->dom->setAttribute('data-name', $name);
        return $this;
    }


    public function setSource($source)
    {
        $this->sourceURL = $source;
        $this->dom->setAttribute('data-source', $this->sourceURL);
        return $this;
    }


}

