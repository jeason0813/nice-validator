describe('Core', function(){
    var $dom_way = $('#dom_way'),
        $js_way = $('#js_way'),
        data;

    before(function(){
        $('#dom_way').find(':input[data-rule]')
        .attr('data-cacherule', function(){
            return $(this).attr('data-rule');
        });
    });

    afterEach(function(){
        $('#dom_way,#js_way').each(function(){
            var $form = $(this),
                data = $form.data('validator');
            if (data) {
                data.destroy();
                $form.trigger('reset').find(':input[data-cacherule]').attr('data-rule', function(){
                    return $(this).attr('data-cacherule');
                });
            }
        }); 
    });

    describe('Initialization', function(){
        it('Automatic initialization when the form input focusin', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.find('input[name="email"]').trigger('focusin');
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('Automatic initialization when the form been submiting', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.trigger('submit');
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('One line code initialization', function(){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.validator();
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('Initialization by js way', function(){
            data = $js_way.data('validator');
            assert.ok(!data);
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            data = $js_way.data('validator');
            assert.ok(data && data.fields.email);
        });

        it('Initialization with valid callback', function(done){
            data = $dom_way.data('validator');
            assert.ok(!data);
            $dom_way.validator(function(){
                done();
            }).find('input').val('abc@gmail.com');
            data = $dom_way.data('validator');
            assert.ok(data && data.fields.email);
            $dom_way.trigger('validate');
        });
    });

    describe('.isValid()', function(){
        it('$form.isValid() false', function(){
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            assert.ok($js_way.isValid() === false);
        });

        it('$form.isValid() true', function(){
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            $js_way.find('input').eq(0).val('test@niceue.com').end().eq(1).val('password');
            assert.ok($js_way.isValid() === true);
        });

        it('$form.isValid(callback) false', function(done){
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            $js_way.isValid(function(v){
                assert.ok(v === false);
                done();
            });
        });

        it('$form.isValid(callback) true', function(done){
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            $js_way.find('input').eq(0).val('test@niceue.com').end().eq(1).val('password');
            $js_way.isValid(function(v){
                assert.ok(v === true);
                done();
            });
        });

        it('$field.isValid() false', function(){
            var $input = $js_way.find('input').eq(0);
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            assert.ok($input.val('').isValid() === false);
        });

        it('$field.isValid() true', function(){
            var $input = $js_way.find('input').eq(0);
            $js_way.validator({
                fields: {
                    email: 'required;email',
                    password: 'required'
                }
            });
            assert.ok($input.val('test@niceue.com').isValid() === true);
        });
    });

});